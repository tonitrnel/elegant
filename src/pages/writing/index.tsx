import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import Layout from '@/component/layout'
import Container from '@/component/container'
import classes from './index.styl'

export const query = graphql`
  query($limit: Int) {
    posts: allMarkdownRemark(
      filter: { fields: { status: { eq: true } } }
      sort: { order: DESC, fields: [fields___date] }
      skip: 0
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
            title
            date(formatString: "MMMM DD, YYYY", locale: "zh-CN")
            dateModified(formatString: "YYYY-MM-DD HH:mm", locale: "zh-CN")
            dateCreated: date(formatString: "YYYY-MM-DD HH:mm", locale: "zh-CN")
            rawDate: date
            existPicture: title
            picture {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            category
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
type ChildImageSharp = {
  childImageSharp: {
    fluid: FluidObject
  }
}
interface PageProps {
  data: {
    posts: {
      edges: {
        node: {
          fields: {
            slug: string
            title: string
            date: string
            dateModified: string
            dateCreated: string
            rawDate: string
            category: string
            picture: ChildImageSharp | null
          }
          excerpt: string
        }
      }[]
      totalCount: number
    }
  }
}

export default (props: PageProps) => {
  const posts = props.data.posts.edges
  return (
    <Layout title="日记">
      <Container className={classes.container}>
        {posts.map((post, index) => (
          <div className={classes.post} key={index}>
            <h2 className={classes.post__title} title={post.node.fields.title}>
              <Link
                to={post.node.fields.slug}
                children={post.node.fields.title}
              />
            </h2>
            <section className={classes.post__metadata}>
              <Link
                to={`/categories/${post.node.fields.category}`}
                title={`分类为：${post.node.fields.category}`}
              >
                {post.node.fields.category}
              </Link>
              <small>•</small>
              <time
                dateTime={post.node.fields.rawDate}
                title={`创建时间：${post.node.fields.dateCreated} - 修改时间${
                  post.node.fields.dateModified
                }`}
              >
                {post.node.fields.date}
              </time>
            </section>
            {post.node.fields.picture && (
              <Link
                to={post.node.fields.slug}
                className={classes.post__featured__wrapper}
                children={
                  <Image
                    className={classes.post__featured__image}
                    sizes={post.node.fields.picture.childImageSharp.fluid}
                  />
                }
              />
            )}
            <p className={classes.post__intro}>{post.node.excerpt}</p>
          </div>
        ))}
        <div className={classes.view__more}>
          <Link to="/archive/page=1" children="查看更多 >>" />
        </div>
      </Container>
    </Layout>
  )
}
