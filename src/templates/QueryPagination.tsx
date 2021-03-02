import { graphql } from 'gatsby';

export const QUERY_POSTS_PAGINATION_DSL = graphql`
  query PostsPagination($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: {
        frontmatter: { status: { eq: PUBLISH }, template: { eq: "post" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
                image: gatsbyImageData
              }
            }
          }
        }
      }
      totalCount
    }
  }
`;
export default () => null;
