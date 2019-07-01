import * as React from 'react'
import _ from 'lodash'
import { Link, graphql, PageRendererProps } from 'gatsby'
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
    id: string
  }
}
// gql(tagsData)
export const query = graphql`
  query($id: String) {
    allMarkdownRemark(
      filter: {
        fields: {
          status: { eq: true }
          type: { eq: "post" }
          tags: { in: [$id] }
        }
      }
      sort: { order: DESC, fields: fields___date }
    ) {
      edges {
        node {
          fields {
            slug
            title
            date(formatString: "MMM Do, YYYY", locale: "zh-CN")
          }
        }
      }
    }
  }
`
export default (props: TagPageProps) => {
  const data = _.has(props, 'data.allMarkdownRemark.edges')
    ? props.data.allMarkdownRemark.edges
    : []
  const name = props.pageContext.id
  return (
    <Container path="/archives" className={classes.tags} title={`标签: ${name}`}>
      <h1>标签：{name}</h1>
      <p className={classes.counter}>共有: {data.length}篇文章</p>
      <p className={classes.link}>
        <Link to="/archives">归档</Link> | <Link to="/categories">分类</Link> | <Link to="/tags">标签</Link>
      </p>
      <ul className={classes.list}>
        {data.map(({ node }, index) => (
          <li className={classes.item} key={index}>
            <Link to={node.fields.slug}>
              <time>{node.fields.date}</time>
              <small>-</small>
              <span>{node.fields.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
