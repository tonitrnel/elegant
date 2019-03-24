import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../component/layout'

type Fields = {
  title: string
  tags: string[] | null
  category: string
  date: string
  slug: string
  status: boolean
}
interface PageProps {
  data: {
    markdownRemark: {
      html: string
      fields: Fields
    }
  }
  pageContext: {
    slug: string
    prev: Fields | null
    next: Fields | null
  }
}

export default (props: PageProps) => {
  const postData = props.data.markdownRemark
  const tags = Array.isArray(postData.fields.tags) ? (
    postData.fields.tags.map((tag, index) => (
      <Link style={{ marginRight: '10px' }} key={index} to={`/tags/${tag}`}>
        {tag}
      </Link>
    ))
  ) : (
    <span>无</span>
  )
  const { prev, next } = props.pageContext
  return (
    <Layout>
      <article>
        <h1>{postData.fields.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.html }} />
        <p>文章信息：</p>
        <ul>
          <li>
            分类：
            <Link to={`/categories/${postData.fields.category}`}>
              {postData.fields.category}
            </Link>
          </li>
          <li>
            标签：
            {tags}
          </li>
          <li>时间：{postData.fields.date}</li>
          {prev ? (
            <li>
              上一篇文章：
              <Link to={prev.slug} children={prev.title} />
            </li>
          ) : (
            ''
          )}
          {next ? (
            <li>
              下一篇文章：
              <Link to={next.slug} children={next.title} />
            </li>
          ) : (
            ''
          )}
        </ul>
      </article>
    </Layout>
  )
}
export const query = graphql`
  query PostsQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
        tags
        category
        date
        slug
        status
      }
    }
  }
`
