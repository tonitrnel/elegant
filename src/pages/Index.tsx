import React from 'react';
import { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { PostListQuery } from 'types/gql';

const IndexPage: FC<{
  path: string;
  data: PostListQuery;
}> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title={data.site?.metadata?.title ?? undefined} />
      <div>{posts.length}</div>
    </Layout>
  );
};

export const QUERY_LIST_DSL = graphql`
  query PostList {
    site {
      metadata: siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
    ) {
      edges {
        node {
          excerpt(truncate: true, format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            update(formatString: "MMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
export default IndexPage;
