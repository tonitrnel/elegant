import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import classes from './index.styl'

type Fields = {
  title: string
  slug: string
  status: boolean
}
interface PageProps {
  data: {
    markdownRemark: {
      html: string
      fields: Fields
      excerpt: string
    }
  }
}
export default class Post extends React.Component<PageProps> {
  render() {
    const {
      data: { markdownRemark: posts }
    } = this.props
    return (
      <Layout title={posts.fields.title}>
        <Container>
          <article className={classes.links}>
            <h1 className={classes.title}>{posts.fields.title}</h1>
            <div
              className={classes.content}
              dangerouslySetInnerHTML={{ __html: posts.html }}
            />
          </article>
        </Container>
      </Layout>
    )
  }
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
        slug
        status
      }
      excerpt(pruneLength: 50)
    }
  }
`
