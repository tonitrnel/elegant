import * as React from 'react'
import _ from 'lodash'
import { Link, graphql, PageRendererProps } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import classes from './index.styl'
interface TagPageProps extends PageRendererProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string
            title: string
            date: string
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
                        date(formatString: "MMMM DD, YYYY", locale: "zh-CN")
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
  const tagName = props.pageContext.tag
  return (
    <Layout title={`标签: ${props.pageContext.tag}`}>
      <Container>
        <h1 className={classes.tag__title}>标签：{tagName}</h1>
        <p className={classes.tag__counter}>共有: {tagData.length}篇文章</p>
        <ul className={classes.tag__list}>
          {tagData.map(({ node }, index) => (
            <li className={classes.tag__item} key={index}>
              <Link to={node.fields.slug}>
                <time>{node.fields.date}</time>
                <small>-</small>
                <span>{node.fields.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}
