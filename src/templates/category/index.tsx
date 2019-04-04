import * as React from 'react'
import _ from 'lodash'
import { Link, graphql, PageRendererProps } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import classes from './index.styl'

interface PageProps extends PageRendererProps {
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
    category: string
  }
}
// gql(tagsData)
export const Query = graphql`
    query($category: String) {
        allMarkdownRemark(
            limit: 2000
            filter: {
                fields: { 
                    status: { eq: true  }
                    category: {eq: $category }
                    type: {eq: "post"}
                }
            }
            sort: { order: DESC, fields: fields___date }
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
export default (props: PageProps) => {
  const categoryData = _.has(props, 'data.allMarkdownRemark.edges')
    ? props.data.allMarkdownRemark.edges
    : []
  return (
    <Layout title={`分类：${props.pageContext.category}`}>
      <Container>
        <h1 className={classes.category__title}>分类：{props.pageContext.category}</h1>
        <p className={classes.category__counter}>共有: {categoryData.length}篇文章</p>
        <ul className={classes.category__list}>
          {categoryData.map(({ node }, index) => (
            <li key={index} className={classes.category__item}>
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
