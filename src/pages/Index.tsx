import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';
import Layout from 'components/Layout';
import relativeTime from 'dayjs/plugin/relativeTime';
import SEO from 'components/SEO';
import { ListQuery, PostsPaginationQuery } from 'types/gql';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

type Frontmatter = ListQuery['allMarkdownRemark']['edges'][0]['node']['frontmatter'];

const FeaturedImage: FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  if (!frontmatter?.thumbnail) return null;
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
  const [posts, setPosts] = useState<ListQuery['allMarkdownRemark']['edges']>(
    data.allMarkdownRemark.edges
  );
  const [metadata, setMetadata] = useState({
    limit,
    index: 0,
    total: data.allMarkdownRemark.totalCount,
    nextPage: Math.ceil(data.allMarkdownRemark.totalCount / limit) > 1,
  });
  const loadNextPage = async () => {
    console.log('加载中');
    if (!metadata.nextPage) return void 0;
    const currentIndex = metadata.index + 1;
    try {
      const response = await fetch(
        `/page-data/query/pagination=${currentIndex}/page-data.json`
      ).then<PostsPaginationQuery>((it) => it.json());
      setPosts(response.posts.edges);
      setMetadata({
        index: currentIndex,
        limit,
        total: data.allMarkdownRemark.totalCount,
        nextPage:
          Math.ceil(data.allMarkdownRemark.totalCount / limit) > currentIndex,
      });
      console.log('加载成功');
    } catch (e) {
      console.log('加载失败');
    }
  };
  return (
    <Layout title={'首页'}>
      <SEO title={'首页'} />
      <ol>
        {posts.map((it) => (
          <li key={it.node.fields?.slug}>
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
              <Link
                to={`/categories/${it.node.frontmatter?.category}`}
                title={`分类：${it.node.frontmatter?.category}`}
                className="post__category"
              >
                {it.node.frontmatter?.category}
              </Link>
            </div>
            <FeaturedImage frontmatter={it.node.frontmatter} />
            <div className="post-main">
              <h2>
                <Link to={it.node.fields?.slug as string}>
                  {it.node.frontmatter?.title}
                </Link>
              </h2>
              <span>{dayjs(it.node.frontmatter?.date).fromNow()}</span>
              <p>{it.node.frontmatter?.excerpt}</p>
            </div>
          </li>
        ))}
      </ol>
      {metadata.nextPage && <button onClick={loadNextPage}>加载更多</button>}
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
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
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
