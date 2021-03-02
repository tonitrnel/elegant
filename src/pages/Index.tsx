import React, { useCallback, useState } from 'react';
import { FC } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage as Image } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import relativeTime from 'dayjs/plugin/relativeTime';
import SEO from 'components/SEO';
import { ListQuery, PostsPaginationQuery } from 'types/gql';
import { PageData } from 'types/helper';
import { createProduceWrapper } from 'utils/createProduceWrapper';
import { Button, Snackbar, Slide, SlideProps } from '@material-ui/core';
import dayjs from 'dayjs';
import './styles/Index.less';
import clsx from 'utils/clsx';

dayjs.extend(relativeTime);

type Frontmatter = ListQuery['allMarkdownRemark']['edges'][0]['node']['frontmatter'];

const FeaturedImage: FC<{ frontmatter: Frontmatter }> = ({ frontmatter }) => {
  if (!frontmatter?.thumbnail || !frontmatter.thumbnail.childImageSharp?.fluid)
    return null;
  return (
    <Image
      className="featured-image"
      alt=">>>???"
      image={frontmatter.thumbnail.childImageSharp?.fluid as any}
    />
  );
};
const TransitionDown: FC<SlideProps> = (props) => (
  <Slide {...props} direction="down" />
);

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
      loading: false,
      total: data.allMarkdownRemark.totalCount,
      nextPage: Math.ceil(data.allMarkdownRemark.totalCount / limit) > 1,
    })
  );
  const [message, setMessage] = createProduceWrapper(
    useState<{ visible: boolean; content: string | null }>({
      visible: false,
      content: null,
    })
  );
  const loadNextPage = useCallback(async () => {
    if (!metadata.nextPage || metadata.loading) return void 0;
    console.log('加载中');
    const currentIndex = metadata.index + 1;
    try {
      const now = performance.now();
      setMetadata((draft) => {
        draft.loading = true;
      });
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
        draft.loading = false;
        // 索引从0开始
        draft.nextPage =
          Math.floor(data.allMarkdownRemark.totalCount / limit) > currentIndex;
      });
      console.log(`加载成功, 耗时：${performance.now() - now}ms`);
      setMessage((draft) => {
        draft.visible = true;
        draft.content = `已载入第${currentIndex + 1}页， 共${Math.ceil(
          metadata.total / metadata.limit
        )}页`;
      });
    } catch (e) {
      console.error(e);
      setMetadata((draft) => {
        draft.loading = false;
      });
      console.log('加载失败');
    }
  }, [metadata]);
  const onCloseMessage = useCallback(() => {
    setMessage((draft) => {
      draft.visible = false;
    });
  }, [message.visible]);
  return (
    <Layout title={'首页'}>
      <SEO title={'首页'} />
      <section className="article-list-wrapper">
        {posts.map((it, i) => (
          <article key={it.node.fields?.slug} className="post-item">
            <div className="post-header">
              {(() => {
                const date = dayjs(it.node.frontmatter?.date);
                return (
                  <time
                    className="post__date"
                    dateTime={it.node.frontmatter?.date}
                    title={dayjs(it.node.frontmatter?.date).format(
                      'MMM DD日, YYYY年'
                    )}
                  >
                    <span className="post__date-day">{date.format('DD')}</span>
                    <span className="post__date-month">
                      {date.format('MMMM')}
                    </span>
                    <span className="post__date-relative">
                      {date.fromNow()}
                    </span>
                  </time>
                );
              })()}
            </div>
            <FeaturedImage frontmatter={it.node.frontmatter} />
            <div className="post-main">
              <h2>
                <Link to={it.node.fields?.slug as string}>
                  {it.node.frontmatter?.title}
                </Link>
              </h2>
              <div className="post-info">
                <span className="post__category">
                  <Link
                    to={`/categories/${it.node.frontmatter?.category}`}
                    title={`分类：${it.node.frontmatter?.category}`}
                  >
                    {it.node.frontmatter?.category}
                  </Link>
                </span>
                {it.node.frontmatter?.tags &&
                  it.node.frontmatter.tags.length > 0 && (
                    <ul className="post__tag-list">
                      {it.node.frontmatter.tags.map((tag) => (
                        <li key={tag}>
                          <Link to={`/tags/${tag.toLowerCase()}`}>#{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>
              <p>{it.node.frontmatter?.excerpt}</p>
            </div>
          </article>
        ))}
      </section>
      {metadata.nextPage && (
        <Button
          variant="outlined"
          className={clsx(
            'next-page__btn',
            metadata.loading && 'next-page__btn-loading'
          )}
          onClick={loadNextPage}
        >
          {metadata.loading ? (
            <span>
              加载中
              <i className="next-page__loading-dot" />
            </span>
          ) : (
            <span>加载更多</span>
          )}
        </Button>
      )}
      <Snackbar
        open={message.visible}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message={message.content}
        onClose={onCloseMessage}
        TransitionComponent={TransitionDown}
        autoHideDuration={1600}
        className="load-done-message"
      />
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
