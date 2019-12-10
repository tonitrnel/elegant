import React, { Fragment } from 'react'
import detect, { Detect } from '@/component/comment/detect'
import { Comment as CommentItem } from './type'
import { Moment } from 'moment'
import css from './list.styl'

export interface CommentList extends Omit<CommentItem, 'date'> {
  children: CommentList[]
  parentObject: CommentList | null
  date: Moment
}

interface Props {
  dataSource: CommentList[]
  onReply: (id: string) => void
  // 点击“@某某某”时候的事件
  onTrack: (id: string) => void
}
interface State {
  expandIds: string[]
}

function Avatar(props: { url?: string; src: string; nickname: string }) {
  if (props.url)
    return (
      <a target="_blank" rel="noopener" href={props.url}>
        <img src={props.src} alt={props.nickname} />
      </a>
    )
  return <img src={props.src} alt={props.nickname} />
}
function NickName(props: { url?: string; name: string }) {
  if (props.url)
    return (
      <a target="_blank" rel="noopener" href={props.url}>
        {props.name}
      </a>
    )
  return <span>{props.name}</span>
}

type ShrinkRender = (r: CommentList) => React.ReactNode

function Shrink(nodes: CommentList[], expand = false, id: string) {
  return (render: ShrinkRender) => {
    if (nodes.length <= 3 || expand) {
      return <ol className="reply-box">{nodes.map(r => render(r))}</ol>
    }
    return (
      <ol className="reply-box">
        {nodes.slice(0, 3).map(r => render(r))}
        <div className={css.viewMore}>
          共<b>{nodes.length}</b>条回复，
          <a className={css.more} data-id={id}>
            点击查看
          </a>
        </div>
      </ol>
    )
  }
}

function Content(props: {
  html: string
  rid?: string
  rrid?: string
  name?: string
}) {
  if (props.rid && props.rrid !== props.rid) {
    return (
      <p
        className={css.text}
        dangerouslySetInnerHTML={{
          __html: `回复<a class="${css.at}" href="#comment-${props.rid}">@${props.name}</a>: ${props.html}`
        }}
      />
    )
  }
  return (
    <p
      className={css.text}
      dangerouslySetInnerHTML={{
        __html: props.html
      }}
    />
  )
}

function UA({ ua }: { ua: Detect }) {
  return (
    <Fragment>
      <span className="browser">
        {ua.browser} {ua.version}
      </span>
      <span className="os">
        {ua.os} {ua.osVersion}
      </span>
    </Fragment>
  )
}

export default class List extends React.Component<Props, State> {
  state: State = {
    expandIds: []
  }
  queryUserName(parentObject: CommentList | null): string {
    if (!parentObject) return ''
    return parentObject.nickname
  }
  handleClick = e => {
    const target = e.target as HTMLAnchorElement
    if (!target) return void 0
    // 回复
    if (target.matches(`a.${css.reply}`)) {
      const [_, id] = target.hash.split('-')
      e.preventDefault()
      this.props.onReply(id)
      return void 0
    }
    // 追踪被艾特者
    if (target.matches(`a.${css.at}`)) {
      const [_, id] = target.hash.split('-')
      e.preventDefault()
      this.props.onTrack(id)
      return void 0
    }
    // 点击更多
    if (target.matches(`a.${css.more}`)) {
      const { id } = target.dataset
      if (!id) return void 0
      e.preventDefault()
      this.setState(({ expandIds }) => {
        expandIds.push(id)
        return { expandIds }
      })
    }
    // 放大图片
    if (target.matches('img.image')) {
      target.classList.toggle('zoom')
    }
  }
  render() {
    const { dataSource } = this.props
    const { expandIds } = this.state
    if (dataSource.length === 0)
      return <div className={css.tips}>我好像被封印了，一条评论都没有</div>
    return (
      <ol onClick={this.handleClick} className={css.commentList}>
        {dataSource.map(c => (
          <li key={c.id} id={`comment-${c.id}`} className={css.listItem}>
            <div className={css.avatar}>
              <Avatar src={c.avatar} url={c.url} nickname={c.nickname} />
            </div>
            <div className={css.con}>
              <div className={css.user}>
                <cite className={css.name}>
                  <NickName url={c.url} name={c.nickname} />
                </cite>
                <UA ua={detect(c.ua)} />
              </div>
              <Content html={c.content} />
              <div className={css.info}>
                <time className="time">{c.date.fromNow()}</time>
                <a
                  className={css.reply}
                  href={`#reply-${c.id}`}
                  title={`回复${c.nickname}`}
                >
                  回复
                </a>
              </div>
              {Shrink(c.children, expandIds.includes(c.id), c.id)(r => (
                <li key={r.id} id={`comment-${r.id}`} className={css.replyItem}>
                  <div className={css.avatar}>
                    <Avatar src={r.avatar} url={r.url} nickname={r.nickname} />
                  </div>
                  <div className="reply-con">
                    <div className={css.user}>
                      <cite className={css.name}>
                        <NickName url={c.url} name={c.nickname} />
                      </cite>
                      <UA ua={detect(c.ua)} />
                    </div>
                    <Content
                      html={r.content}
                      rid={r.rid}
                      rrid={r.rrid}
                      name={this.queryUserName(r.parentObject)}
                    />
                    <div className={css.info}>
                      <time className="time">{r.date.fromNow()}</time>
                      <a className={css.reply} href={`#reply-${r.id}`}>
                        回复
                      </a>
                    </div>
                  </div>
                </li>
              ))}
              {/*<ol className="reply-box">*/}
              {/*  {c.children.slice(0, 3).map()}*/}
              {/*</ol>*/}
            </div>
          </li>
        ))}
      </ol>
    )
  }
}
