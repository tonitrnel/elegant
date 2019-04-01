import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import classes from './index.styl'

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { status: { eq: true } } }
      sort: { order: DESC, fields: [fields___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            title
            date(formatString: "MM-DD")
            key: date(formatString: "YYYY.MM")
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
    limit: number
    skip: number
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

const sortByDesc = (a, b) => (a > b ? -1 : a < b ? 1 : 0)

export default (props: PageProps) => {
  const articles = newDateToGroup(props.data.allMarkdownRemark.edges)
  return (
    <Layout title="归档">
      <Container>
        <h1>归档</h1>
        <p className={classes.archive__counter}>共有: {props.pageContext.totalCount}篇文章</p>
        {Object.keys(articles)
          .sort(sortByDesc)
          .map(year => (
            <section className={classes.archive__collection} key={year}>
              <h2 className={classes.archive__year}>{year}年</h2>
              {Object.keys(articles[year])
                .sort(sortByDesc)
                .map(month => (
                  <ul className={classes.archive__list} key={month}>
                    <h3 className={classes.archive__month}>{month}月</h3>
                    {articles[year][month].map((post, index) => (
                      <li className={classes.archive__item} key={index}>
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
        <div className={classes.archive__nav}>
          {Array.from({ length: props.pageContext.pageCount }).map(
            (_, index) => (
              <Link
                to={`/archive/page=${index + 1}`}
                key={index}
                className={`${classes.archive__nav__item} ${props.pageContext.index === index ? classes.archive__nav__item__active : ''}`.trimRight()}
                children={index + 1}
              />
            )
          )}
        </div>
      </Container>
    </Layout>
  )
}
