import React, { FC } from 'react';
import Layout from '~/components/Layout';
import { graphql, PageProps } from 'gatsby';

export const QUERY_POST_DSL = graphql`
  query($slug: String!) {
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
interface IQueryResponse {
  markdownRemark: {
    id: string;
    html: string;
    excerpt: string;
    frontmatter: {
      title: string;
      tags: string[];
      category: string;
      date: string;
      update: string;
      excerpt: string;
    };
  };
}

const PostPage: FC<PageProps<IQueryResponse>> = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  );
};

export default PostPage;
