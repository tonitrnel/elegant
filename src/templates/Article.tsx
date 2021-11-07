import React, { FC, useMemo } from 'react';
import Layout from '~/components/Layout';
import { graphql, Link, PageProps } from 'gatsby';
import { PostQuery } from '~/types/gql';
import NotFound from '~/components/NotFound';
import './styles/Article.less';
import dayjs from 'dayjs';

export const QUERY_ARTICLE_DSL = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 50)
      frontmatter {
        title
        tags
        category
        date
        update
        excerpt
      }
    }
  }
`;

const ArticleTemplatePage: FC<PageProps<PostQuery>> = ({ data }) => {
  if (!data.markdownRemark) {
    return <NotFound />;
  }
  const articleDate = useMemo(() => {
    const publish = dayjs(data.markdownRemark?.frontmatter?.date);
    const update = dayjs(data.markdownRemark?.frontmatter?.update);
    return {
      publish,
      update,
      unchanged: !publish.isBefore(update, 'date'),
    };
  }, []);
  return (
    <Layout title={data.markdownRemark.frontmatter?.title ?? undefined}>
      <article className="article-wrapper">
        <header>
          <h1 className="article-title">
            {data.markdownRemark.frontmatter?.title}
          </h1>
          <section>
            <time>{articleDate.publish.format('MMM DD. YYYY')}</time>
            {articleDate.unchanged || (
              <time>
                上次更新: ({articleDate.update.format('MMM DD. YYYYu')})
              </time>
            )}
            <Link className="article-category" to={''} />
          </section>
        </header>
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html ?? '' }}
        />
      </article>
    </Layout>
  );
};

export default ArticleTemplatePage;
