import * as React from 'react'
import { Link, graphql } from 'gatsby'

export const Query = graphql`
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
            date
          }
          excerpt
        }
      }
    }
  }
`
interface PageProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          fields: {
            slug: string
            title: string
            date: string
          }
          excerpt: string
        }
      }[]
    }
  }
  pageContext: {
    limit: number
    skip: number
    totalCount: number
  }
}
export default (props: PageProps) => {
  const articles = props.data.allMarkdownRemark.edges
  return (
    <section>
      {articles.map((article, index) => (
        <article key={index}>
          <h1>
            <Link
              to={article.node.fields.slug}
              children={article.node.fields.title}
            />
          </h1>
          <span>{article.node.fields.date}</span>
          <p>{article.node.excerpt}</p>
        </article>
      ))}
      <p>
        {Array.from({ length: props.pageContext.totalCount }).map((_, index) => (
          <Link
            style={{ padding: '4px 10px', marginRight: "10px", border: '1px solid #ccc' }}
            to={`/archive/${index + 1}`}
            key={index}
            children={index + 1}
          />
        ))}
      </p>
    </section>
  )
}
