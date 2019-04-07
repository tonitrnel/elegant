import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import preview from '@/component/preview_picture'
import Comment from '@/component/comment'
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
  pageContext: {
    slug: string
    comment: {
      appId: string
      appKey: string
    }
  }
}
export default (props: PageProps) => {
  const {
    data: { markdownRemark: posts },
    pageContext: {comment: {appKey, appId}}
  } = props
  return (
    <Layout title={posts.fields.title} description={posts.excerpt}>
      <Container className={classes.about}>
        <article>
          <h1 className={classes.title}>{posts.fields.title}</h1>
          <div
            className={classes.content}
            onClick={preview}
            dangerouslySetInnerHTML={{ __html: posts.html }}
          />
        </article>
        <Comment appId={appId} appKey={appKey}/>
      </Container>
    </Layout>
  )
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