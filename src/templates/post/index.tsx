import React from 'react'
import { ReactComponent as ModifyIcon } from '@/assets/images/modify.svg'
import { ReactComponent as DateIcon } from '@/assets/images/date.svg'
import { ReactComponent as CategoryIcon } from '@/assets/images/category.svg'
import { ReactComponent as TagIcon } from '@/assets/images/tag.svg'
import { ReactComponent as NavIcon } from '@/assets/images/nav.svg'
import { ReactComponent as EveIcon } from '@/assets/images/eye.svg'
import installAudioPlayer from '@/component/audio-player'
import openLightBox from '@/component/light-box'
import Container from '@/component/container'
import database from '@/helpers/database'
import Comment from '@/component/comment'
import { graphql, Link } from 'gatsby'
import classes from './index.styl'
import md5 from 'crypto-js/md5'
import moment from 'moment'
import _ from 'lodash'
import db from '@/templates/post/visitors'
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
  '/styles/line-numbers.css',
  'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'
]

interface State {
  views: number
}

export default class Post extends React.Component<PageProps, State> {
  state: State = {
    views: 1
  }
  id!: string
  componentDidMount(): void {
    if(typeof window === 'undefined') return void 0
    const audios = document.querySelectorAll<HTMLAudioElement>(
      `.${classes.postMain} audio`
    )
    installAudioPlayer(audios)
    this.id = md5(location.pathname.replace(/\/$/, '')).toString()
    this.loadViews()
  }
  async loadViews() {
    try {
      const statistics = await db.read(this.id)
      // 初始化
      if (!statistics) {
        await db.init(this.id, {
          pid: this.id,
          url: location.href,
          title: document.title
        })
        await database.add('post', {
          id: this.id,
          title: document.title,
          url: location.href
        })
        return void 0
      }
      if (await database.has('post', this.id)) {
        this.setState({ views: statistics.views })
        return void 0
      } else {
        // 添加阅读量
        await db.add(statistics.id)
        this.setState({ views: statistics.views + 1 })
        await database.add('post', {
          id: this.id,
          title: document.title,
          url: location.href
        })
      }
    } catch (e) {}
  }
  async addSt() {}
  handleGlobalClick = ev => {
    openLightBox(ev)
  }
  render() {
    const {
      data: { markdownRemark: posts },
      pageContext: { prev, next }
    } = this.props
    const { views } = this.state
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
                title={`本文分类: ${posts.fields.category}`}
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
              <small>/</small>
              <span title={`阅读次数：${views}`} className={classes.visitors}>
                <EveIcon className="icon" />
                {views}
              </span>
            </section>
          </header>
          <main
            className={classes.postMain}
            onClick={this.handleGlobalClick}
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
