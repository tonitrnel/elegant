import React from 'react';
import { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';

const IndexPage: FC<{
  path: string;
  data: any;
}> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div>{JSON.stringify(posts, null, 2)}</div>
    </Layout>
  );
};

export const Query = graphql`
  query {
    site {
      siteMetadata {
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
