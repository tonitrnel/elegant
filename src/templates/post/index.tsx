import React from 'react'
import { graphql, Link } from 'gatsby'
import Container from '@/component/container'
import preview, { uninstall } from '@/component/preview_picture'
import classes from './index.styl'
import _ from 'lodash'
import { ReactComponent as ModifyIcon } from '@/assets/images/modify.svg'
import { ReactComponent as DateIcon } from '@/assets/images/date.svg'
import { ReactComponent as CategoryIcon } from '@/assets/images/category.svg'
import { ReactComponent as TagIcon } from '@/assets/images/tag.svg'
import { ReactComponent as NavIcon } from '@/assets/images/nav.svg'
import moment from 'moment'
import Comment from '@/component/comment'

type Fields = {
  title: string
  tags: string[] | null
  category: string
  date: string
  slug: string
  comment: boolean
  dateModified: string
  status: boolean
}
interface PageProps {
  data: {
    markdownRemark: {
      id: string
      html: string
      fields: Fields
      excerpt: string
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
  if (tags.length === 0) return null
  return (
    <div className={props.className}>
      <TagIcon className="icon" />
      {tags}
    </div>
  )
}
type PostNavComponentProps = {
  next: PageProps['pageContext']['next']
  prev: PageProps['pageContext']['prev']
  className: string
}
const PostNavComponent = (props: PostNavComponentProps) => {
  const next = props.next && (
    <Link
      title={`前往下一篇`}
      to={props.next.slug}
      children={`${props.next.title} >`}
    />
  )
  const prev = props.prev && (
    <Link
      title={`前往上一篇`}
      to={props.prev.slug}
      children={`< ${props.prev.title}`}
    />
  )
  return (
    <div className={props.className}>
      <NavIcon className="icon" />
      {prev}
      <small>-</small>
      {next}
    </div>
  )
}

const stylesHref = [
  'https://static.wktrf.com/styles/prism-line-numbers.css',
  'https://static.wktrf.com/styles/katex.min.css'
]

export default function Post(props: PageProps) {
  const {
    data: { markdownRemark: posts },
    pageContext: { prev, next }
  } = props
  React.useEffect(() => {
    return () => uninstall()
  })
  const createDate = moment(posts.fields.date)
  const modifyDate = moment(posts.fields.dateModified)
  return (
    <Container
      styles={stylesHref}
      title={posts.fields.title}
      description={posts.excerpt}
      path="/"
    >
      <article>
        <header>
          <h1 className={classes.postTitle}>{posts.fields.title}</h1>
          <section className={classes.postMetadata}>
            <Link
              className={classes.postCategory}
              to={`/categories/${posts.fields.category}`}
              title={`分类在${posts.fields.category}下`}
            >
              <CategoryIcon className="icon" />
              <span>{posts.fields.category}</span>
            </Link>
            <small>/</small>
            <time
              className={classes.createDate}
              dateTime={posts.fields.date}
              title={`发布于${createDate.format('MMMDo dddd aLT')}`}
            >
              <DateIcon className="icon" />
              <span>{createDate.fromNow()}</span>
            </time>
            {modifyDate.isAfter(createDate) && (
              <>
                <small>/</small>
                <time
                  className={classes.modifyDate}
                  dateTime={posts.fields.dateModified}
                  title={`修改于${modifyDate.format('MMMDo dddd aLT')}`}
                >
                  <ModifyIcon className="icon" />
                  <span>{modifyDate.fromNow()}</span>
                </time>
              </>
            )}
          </section>
        </header>
        <main
          className={classes.postMain}
          onClick={preview}
          dangerouslySetInnerHTML={{ __html: posts.html }}
        />
        <footer className={classes.postFooter}>
          <PostTagsComponent
            tags={posts.fields.tags}
            className={classes.tags}
          />
          <PostNavComponent next={next} prev={prev} className={classes.nav} />
        </footer>
      </article>
      <Comment enable={posts.fields.comment} />
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
        tags
        category
        date
        dateModified
        slug
        status
        comment
      }
      excerpt(pruneLength: 50)
    }
  }
`
