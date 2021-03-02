import { graphql } from 'gatsby';

export const QUERY_SEARCH_SOURCE_DSL = graphql`
  query SearchSource {
    source: allMarkdownRemark(
      filter: {
        frontmatter: { status: { eq: PUBLISH }, template: { eq: "post" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
export default () => null;
