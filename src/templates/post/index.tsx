import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import preview from '@/component/preview_picture'
import classes from './index.styl'
import _ from 'lodash'
import moment from 'moment'
import Comments from '@/component/comments'

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
      id: string
      html: string
      fields: Fields & { rawDate: string; dateModified: string }
      excerpt: string
    }
  }
  pageContext: {
    slug: string
    prev: Fields | null
    next: Fields | null
    comment: {
      appId: string
      appKey: string
    }
  }
}
type PostTagsComponentProps = {
  tags: Fields['tags']
  className: string
}
const PostTagsComponent = (props: PostTagsComponentProps) => {
  if (!props.tags) return <></>
  const tags = props.tags
    .filter(Boolean)
    .map((tag, i) => (
      <Link to={`/tags/${_.kebabCase(tag)}`} key={i} children={`# ${tag}`} />
    ))
  return <div className={props.className}>{tags}</div>
}
type PostNavComponentProps = {
  next: PageProps['pageContext']['next']
  prev: PageProps['pageContext']['prev']
  className: string
}
const PostNavComponent = (props: PostNavComponentProps) => {
  const next = props.next ? (
    <Link
      title={`前往下一篇`}
      to={props.next.slug}
      children={`${props.next.title} »`}
    />
  ) : (
    ''
  )
  const prev = props.prev ? (
    <Link
      title={`前往上一篇`}
      to={props.prev.slug}
      children={`« ${props.prev.title}`}
    />
  ) : (
    ''
  )
  return (
    <div className={props.className}>
      {prev}
      {next}
    </div>
  )
}

const stylesHref = ['https://static.wktrf.com/styles/prism-line-numbers.css', 'https://static.wktrf.com/styles/katex.min.css', 'https://static.wktrf.com/styles/prism-solarizedlight.css']

export default class Post extends React.Component<PageProps> {
  render() {
    const {
      data: { markdownRemark: posts },
      pageContext: {
        prev,
        next,
        comment: { appKey, appId }
      }
    } = this.props
    return (
      <Layout styles={stylesHref} title={posts.fields.title} description={posts.excerpt}>
        <Container>
          <article className={classes.post}>
            <div className={classes.post__data}>
              <h1 className={classes.post__title}>{posts.fields.title}</h1>
              <div className={classes.post__metadata}>
                <Link
                  className={classes.post__category}
                  to={`/categories/${posts.fields.category}`}
                >
                  {posts.fields.category}
                </Link>
                <small>•</small>
                <time
                  className={classes.post__date}
                  dateTime={posts.fields.rawDate}
                >
                  {posts.fields.date}
                </time>
              </div>
            </div>
            <div
              className={classes.post__content}
              onClick={preview}
              dangerouslySetInnerHTML={{ __html: posts.html }}
            />
            <time
              className={classes.post__modified}
              dateTime={posts.fields.dateModified}
            >
              本文最后编辑于
              {moment(posts.fields.dateModified).format('YYYY-MM-DD HH:mm')}分
            </time>
            <PostTagsComponent
              tags={posts.fields.tags}
              className={classes.post__tags}
            />
            <PostNavComponent
              next={next}
              prev={prev}
              className={classes.post__nav}
            />
          </article>
          <Comments
            id={posts.id}
            title={posts.fields.title}
            appId={appId}
            appKey={appKey}
          />
        </Container>
      </Layout>
    )
  }
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      fields {
        title
        tags
        category
        date(formatString: "MMMM DD, YYYY", locale: "zh-CN")
        rawDate: date
        dateModified
        slug
        status
      }
      excerpt(pruneLength: 50)
    }
  }
`
