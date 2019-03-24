import * as React from 'react'
import _ from 'lodash'
import { Link, graphql, PageRendererProps } from 'gatsby'
// import { gql } from '../helpers/graphqlLoader'
// import tagsData from '../api/tagData.graphql'

interface PageProps extends PageRendererProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string
            title: string
          }
        }
      }[]
    }
  }
  pageContext: {
    category: string
  }
}
// gql(tagsData)
export const Query = graphql`
    query($category: String) {
        allMarkdownRemark(
            limit: 2000
            filter: {
                fields: { status: { eq: true }, category: {eq: $category } }
            }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                        title
                    }
                }
            }
        }
    }
`
export default (props: PageProps) => {
  const categoryData = _.has(props, 'data.allMarkdownRemark.edges')
    ? props.data.allMarkdownRemark.edges
    : []
  return (
    <section className="tags">
      <h1>分类：{props.pageContext.category}</h1>
      <p>共有: {categoryData.length}篇文章</p>
      <ul>
        {categoryData.map(({ node }, index) => (
          <li key={index} style={{ padding: '10px' }}>
            <Link to={node.fields.slug}>
              {node.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
