import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import preview from '@/component/preview_picture'
import classes from './index.styl'
import _ from 'lodash'
import moment from 'moment'

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
      fields: Fields & {rawDate: string, dateModified: string}
    }
  }
  pageContext: {
    slug: string
    prev: Fields | null
    next: Fields | null
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
    <Link title={`前往下一篇`} to={props.next.slug} children={`${props.next.title} »`} />
  ) : (
    ''
  )
  const prev = props.prev ? (
    <Link title={`前往上一篇`} to={props.prev.slug} children={`« ${props.prev.title}`} />
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

export default class Post extends React.Component<PageProps>{
  render() {
    const {data: {markdownRemark: posts}, pageContext: {prev, next}} = this.props
    return (
      <Layout title={posts.fields.title}>
        <Container>
          <article className={classes.post}>
            <div className={classes.post__data}>
              <h1 className={classes.post__title}>{posts.fields.title}</h1>
              <Link
                className={classes.post__category}
                to={`/categories/${posts.fields.category}`}
              >
                {posts.fields.category}
              </Link>
              <small>•</small>
              <time className={classes.post__date} dateTime={posts.fields.rawDate}>
                {posts.fields.date}
              </time>
            </div>
            <div
              className={classes.post__content}
              onClick={preview}
              dangerouslySetInnerHTML={{ __html: posts.html }}
            />
            <time className={classes.post__modified} dateTime={posts.fields.dateModified}>本文最后编辑于{moment(posts.fields.dateModified).format('YYYY-MM-DD HH:mm')}分</time>
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
        tags
        category
        date(formatString: "MMMM DD, YYYY", locale: "zh-CN")
        rawDate: date
        dateModified
        slug
        status
      }
    }
  }
`
// todo： 实现图窗
// todo: 夜间模式
// todo: 文章的列表
// todo： PWA
// todo: Mobile可用
// todo：无法使用在GraphQL中Date format时使用HH，因为会自动将北京时间转换成格林时间,除非引入Moment或者使用new Date重新格式化
