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
            title
            date(formatString: "MMMM DD, YYYY", locale: "zh-CN")
            update(formatString: "MMMM DD, YYYY", locale: "zh-CN")
            tags
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
            category
          }
          excerpt
        }
      }
      totalCount
    }
  }
`;
export default () => null;
