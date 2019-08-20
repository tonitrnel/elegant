import React from 'react'
import { graphql } from 'gatsby'
import Container from '@/component/container'
import classes from './index.styl'
import Comment from '@/component/comment'

type Fields = {
  title: string
  slug: string
  status: boolean
  comment: boolean
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
      <Container path="/links" className={classes.links} title={posts.fields.title}>
        <article>
          <h1 className={classes.title}>{posts.fields.title}</h1>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: posts.html }}
          />
        </article>
        <Comment enable={posts.fields.comment} />
      </Container>
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
        comment
      }
      excerpt(pruneLength: 50)
    }
  }
`
