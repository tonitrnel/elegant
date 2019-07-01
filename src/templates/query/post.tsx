import { graphql } from 'gatsby'

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      filter: { fields: { status: { eq: true }, type: { eq: "post" } } }
      sort: { order: DESC, fields: [fields___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            title
            date(formatString: "MMMM DD, YYYY", locale: "zh-CN")
            rawDate: date
            modify: dateModified
            day: date(formatString: "DD", locale: "zh-CN")
            month: date(formatString: "MMMM", locale: "zh-CN")
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
`
export default () => null
