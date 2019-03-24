import * as React from 'react'
import _ from 'lodash'
import { Link, graphql, PageRendererProps } from 'gatsby'
// import { gql } from '../helpers/graphqlLoader'
// import tagsData from '../api/tagData.graphql'
interface TagPageProps extends PageRendererProps {
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
    tag: string
  }
}
// gql(tagsData)
export const Query = graphql`
    query($tag: String) {
        allMarkdownRemark(
            limit: 2000
            filter: {
                fields: { status: { eq: true }, tags: { in: [$tag] } }
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
export default (props: TagPageProps) => {
  const tagData = _.has(props, 'data.allMarkdownRemark.edges')
    ? props.data.allMarkdownRemark.edges
    : []
  const tagName = _.has(props, 'pageContext.tag')
    ? props.pageContext.tag
    : '未知标签'
  return (
    <section className="tags">
      <h1>标签：{tagName}</h1>
      <p>共有: {tagData.length}篇文章</p>
      <ul>
        {tagData.map(({ node }, index) => (
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
