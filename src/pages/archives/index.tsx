import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Container from '@/component/container'
import classes from './index.styl'

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { status: { eq: true }, type: { eq: "post" } } }
      sort: { order: DESC, fields: [fields___date] }
    ) {
      edges {
        node {
          fields {
            slug
            title
            date(formatString: "MMM Do", locale: "zh-cn")
            key: date(formatString: "YYYY.MMM", locale: "zh-cn")
          }
          excerpt
        }
      }
    }
  }
`
type Node = {
  node: {
    fields: {
      slug: string
      title: string
      key: string
      date: string
    }
    excerpt: string
  }
}[]

interface PageProps {
  data: {
    allMarkdownRemark: {
      edges: Node
    }
  }
  pageContext: {
    totalCount: number
    pageCount: number
    index: number
  }
}
type Group = {
  [year: string]: {
    [month: string]: Node
  }
}
const newDateToGroup = (posts: Node): Group => {
  const group: Group = {}
  posts.forEach(edges => {
    const [year, month] = edges.node.fields.key.split('.')
    if (!group[year]) group[year] = {}
    if (!group[year][month]) group[year][month] = []
    group[year][month].push(edges)
  })
  return group
}
const getYearNumber = (year): number =>
  Object.keys(year).reduce((p, c) => p + year[c].length, 0)
const sortByDesc = (a, b) => (a > b ? -1 : a < b ? 1 : 0)

export default (props: PageProps) => {
  const { edges } = props.data.allMarkdownRemark
  const articles = newDateToGroup(edges)
  return (
    <Container path="/archives" className={classes.archive} title="归档">
      <h1>归档</h1>
      <p className={classes.counter}>{edges.length}篇文章</p>
      <p className={classes.link}>
        <Link to="/archives">归档</Link> | <Link to="/categories">分类</Link> | <Link to="/tags">标签</Link>
      </p>
      {Object.keys(articles)
        .sort(sortByDesc)
        .map(year => (
          <section className={classes.collection} key={year}>
            <h2 className={classes.year}>
              <span>{year}年</span>
              <span className={classes.counter}>
                {getYearNumber(articles[year])}篇
              </span>
            </h2>
            {Object.keys(articles[year])
              .sort(sortByDesc)
              .map(month => (
                <ul className={classes.list} key={month}>
                  <h3 className={classes.month}>{month}</h3>
                  {articles[year][month].map((post, index) => (
                    <li className={classes.item} key={index}>
                      <Link to={post.node.fields.slug}>
                        <time>{post.node.fields.date}</time>
                        <small>-</small>
                        <span>{post.node.fields.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
          </section>
        ))}
    </Container>
  )
}
