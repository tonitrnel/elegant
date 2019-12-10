import React from 'react'
import { graphql } from 'gatsby'
import Container from '@/component/container'
import Comment from '@/component/comment'
import classes from './index.styl'
import installLightBox from '@/component/light-box'

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
      id: string
      fields: Fields
      excerpt: string
    }
  }
  pageContext: {
    slug: string
  }
}
export default (props: PageProps) => {
  const {
    data: { markdownRemark: posts }
  } = props
  return (
    <Container
      path="/about"
      className={classes.about}
      title={posts.fields.title}
      description={posts.excerpt}
    >
      <article>
        <h1 className={classes.title}>{posts.fields.title}</h1>
        <div
          className={classes.content}
          onClick={installLightBox}
          dangerouslySetInnerHTML={{ __html: posts.html }}
        />
      </article>
      <Comment id={posts.id} enable={posts.fields.comment} />
    </Container>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
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
