import React, { FC } from 'react';
import Layout from 'components/Layout';
import { graphql, Link, PageProps } from 'gatsby';
import { PostQuery } from 'types/gql';
import NotFound from 'components/NotFound';

export const QUERY_POST_DSL = graphql`
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

const PostTemplatePage: FC<PageProps<PostQuery>> = ({ data }) => {
  if (!data.markdownRemark) {
    return <NotFound />;
  }
  return (
    <Layout title={data.markdownRemark.frontmatter?.title ?? undefined}>
      <article>
        <header>
          <h1 className="post-title">
            {data.markdownRemark.frontmatter?.title}
          </h1>
          <section>
            <Link className="post-category" to={''} />
          </section>
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html ?? '' }}
        />
      </article>
    </Layout>
  );
};

export default PostTemplatePage;
