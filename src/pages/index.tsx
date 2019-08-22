import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import Container from '@/component/container'
import classes from './index.styl'
import moment from 'moment'

export const query = graphql`
  query($limit: Int) {
    posts: allMarkdownRemark(
      filter: { fields: { status: { eq: true }, type: { eq: "post" } } }
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
            rawDate: date
            modify: dateModified
            day: date(formatString: "DD", locale: "zh-CN")
            month: date(formatString: "MMMM", locale: "zh-CN")
            thumbnail {
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

type Fields = {
  slug: string
  title: string
  date: string
  rawDate: string
  modify: string
  day: string
  month: string
  category: string
  thumbnail: ChildImageSharp | null
}

interface PageProps {
  data: {
    posts: {
      edges: {
        node: {
          fields: Fields
          excerpt: string
        }
      }[]
      totalCount: number
    }
  }
  pageContext: {
    limit: number
  }
}

const FeaturedImage = ({ fields }: { fields: Fields }) => {
  if (!fields.thumbnail || typeof fields.thumbnail !== 'object') return null
  return (
    <Image
      className={classes.featuredImage}
      sizes={fields.thumbnail.childImageSharp.fluid}
    />
  )
}
interface PageState {
  posts: {
    node: {
      fields: Fields
      excerpt: string
    }
    rate: number
  }[]
  limit: number
  index: number
  totalCount: number
  hasNextPage: boolean
}
export default class Index extends React.Component<PageProps, PageState> {
  state: PageState = {
    posts: [],
    limit: 0,
    index: 0,
    totalCount: 0,
    hasNextPage: false
  }
  constructor(props) {
    super(props)
    const {
      data: { posts },
      pageContext: { limit }
    } = this.props
    this.state = {
      posts: posts.edges.map((item, index) => ({ ...item, rate: index })),
      limit,
      index: 0,
      totalCount: posts.totalCount,
      hasNextPage: Math.ceil(posts.totalCount / limit) > 1
    }
  }
  loadNextPage = () => {
    let loading = false
    return async () => {
      const { index, hasNextPage, posts, limit } = this.state
      if (!hasNextPage || loading) return void 0
      loading = true
      const currentIndex = index + 1
      try {
        const { result } = await fetch(
          `/page-data/query/stream-item=${currentIndex}/page-data.json`
        ).then(value => value.json())
        const data = result.data.posts as PageProps['data']['posts']
        this.setState({
          index: currentIndex,
          posts: posts.concat(
            data.edges.map((item, index) => ({ ...item, rate: index }))
          ),
          hasNextPage: Math.ceil(data.totalCount / limit) > currentIndex + 1
        })
      } catch (e) {
        console.log(e)
        this.setState({ hasNextPage: false })
      }
      loading = false
    }
  }
  render() {
    const { posts, hasNextPage } = this.state
    return (
      <Container path="/" className={classes.container}>
        <ol className={classes.postList}>
          {posts.map((post, index) => (
            <li
              className={classes.postItem}
              style={{ animationDelay: `${post.rate * 0.2}s` }}
              key={index}
            >
              <header className={classes.postHeader}>
                <time
                  className={classes.postTime}
                  dateTime={post.node.fields.rawDate}
                  title={post.node.fields.date}
                >
                  <span className={classes.postDay}>
                    {post.node.fields.day}
                  </span>
                  <span className={classes.postMonth}>
                    {post.node.fields.month}
                  </span>
                </time>
                <Link
                  to={`/categories/${post.node.fields.category}`}
                  title={`分类: ${post.node.fields.category}`}
                  className={classes.postCategory}
                >
                  {post.node.fields.category}
                </Link>
              </header>
              <FeaturedImage fields={post.node.fields} />
              <main className={classes.postMain}>
                <h2>
                  <Link to={post.node.fields.slug}>
                    {post.node.fields.title}
                  </Link>
                </h2>
                <span>{moment(post.node.fields.rawDate).fromNow()}</span>
                <p>{post.node.excerpt}</p>
              </main>
            </li>
          ))}
        </ol>
        <button
          style={{ display: hasNextPage ? 'inline-black' : 'none'  }}
          onClick={this.loadNextPage()}
          className={classes.loadMore}
        >
          加载更多
        </button>
      </Container>
    )
  }
}
