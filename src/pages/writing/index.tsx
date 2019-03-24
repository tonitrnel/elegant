import * as React from 'react'
import { Link, graphql } from 'gatsby'

export const query = graphql`
  query {
      allMarkdownRemark(
          sort: { order: DESC, fields: [fields___date] }
          filter: { fields: { status: { eq: true } } }
          skip: 10
          limit: 10
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
      <p><Link to='/archive/2' children='查看更多'/></p>
    </section>
  )
}
