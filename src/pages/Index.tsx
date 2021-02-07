import React, { useCallback, useEffect, useState } from 'react';
import { FC } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import Layout from 'components/Layout';
import relativeTime from 'dayjs/plugin/relativeTime';
import SEO from 'components/SEO';
import { ListQuery, PostsPaginationQuery } from 'types/gql';
import dayjs from 'dayjs';
import { PageData } from 'types/helper';
import { createProduceWrapper } from 'utils/createProduceWrapper';
import './styles/Index.less';

dayjs.extend(relativeTime);

type Frontmatter = ListQuery['allMarkdownRemark']['edges'][0]['node']['frontmatter'];

const FeaturedImage: FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  if (!frontmatter?.thumbnail || !frontmatter.thumbnail.childImageSharp?.fluid)
    return null;
  return (
    <Image
      className="featured-image"
      fluid={frontmatter.thumbnail.childImageSharp?.fluid as FluidObject}
    />
  );
};

const IndexPage: FC<PageProps<ListQuery, { limit: number }>> = ({
  data,
  pageContext: { limit },
}) => {
  const [posts, setPosts] = createProduceWrapper(
    useState<ListQuery['allMarkdownRemark']['edges']>(
      data.allMarkdownRemark.edges
    )
  );
  const [metadata, setMetadata] = createProduceWrapper(
    useState({
      limit,
      index: 0,
      total: data.allMarkdownRemark.totalCount,
      nextPage: Math.ceil(data.allMarkdownRemark.totalCount / limit) > 1,
    })
  );
  const loadNextPage = useCallback(async () => {
    console.log('加载中');
    if (!metadata.nextPage) return void 0;
    const currentIndex = metadata.index + 1;
    try {
      const now = performance.now();
      const response = await fetch(
        `/page-data/query/pagination=${currentIndex}/page-data.json`
      ).then<PageData<PostsPaginationQuery>>((it) => it.json());
      setPosts((draft) => {
        if (!response.result) return void 0;
        draft.push(...response.result.data.posts.edges);
      });
      setMetadata((draft) => {
        draft.index = currentIndex;
        draft.limit = limit;
        draft.total = data.allMarkdownRemark.totalCount;
        // 索引从0开始
        draft.nextPage =
          Math.floor(data.allMarkdownRemark.totalCount / limit) > currentIndex;
      });
      console.log(`加载成功, 耗时：${performance.now() - now}ms`);
    } catch (e) {
      console.error(e);
      console.log('加载失败');
    }
  }, [metadata]);
  return (
    <Layout title={'首页'}>
      <SEO title={'首页'} />
      <section className="post-list">
        {posts.map((it) => (
          <article className="post-item" key={it.node.fields?.slug}>
            <div className="post-header">
              <time
                className="post__date"
                dateTime={it.node.frontmatter?.date}
                title={dayjs(it.node.frontmatter?.date).format('MMMM DD, YYYY')}
              >
                <span className="post__date-day">
                  {dayjs(it.node.frontmatter?.date).format('DD')}
                </span>
                <span className="post__date-month">
                  {dayjs(it.node.frontmatter?.date).format('MMMM')}
                </span>
              </time>
            </div>
            {/*<FeaturedImage frontmatter={it.node.frontmatter} />*/}
            <div className="post-main">
              <h2>
                <Link to={it.node.fields?.slug as string}>
                  {it.node.frontmatter?.title}
                </Link>
              </h2>
              <span>{dayjs(it.node.frontmatter?.date).fromNow()}</span>
              <Link
                to={`/categories/${it.node.frontmatter?.category}`}
                title={`分类：${it.node.frontmatter?.category}`}
                className="post__category"
              >
                {it.node.frontmatter?.category}
              </Link>
              <p>{it.node.frontmatter?.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
      {metadata.nextPage && (
        <button className="next-page-btn" onClick={loadNextPage}>
          加载更多
        </button>
      )}
    </Layout>
  );
};

export const QUERY_LIST_DSL = graphql`
  query List($limit: Int) {
    site {
      metadata: siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { status: { eq: PUBLISH }, template: { eq: "post" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      limit: $limit
    ) {
      edges {
        node {
          excerpt(truncate: true, format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            date
            update
            title
            tags
            category
            excerpt
            thumbnail {
              childImageSharp {
                fluid {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`;
export default IndexPage;
