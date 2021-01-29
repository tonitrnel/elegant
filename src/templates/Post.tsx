import React, { FC } from 'react';
import Layout from 'components/Layout';
import { graphql, PageProps } from 'gatsby';
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

const PostPage: FC<PageProps<PostQuery>> = ({ data }) => {
  if (!data.markdownRemark) {
    return <NotFound />;
  }
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html ?? '' }}
      />
    </Layout>
  );
};

export default PostPage;
