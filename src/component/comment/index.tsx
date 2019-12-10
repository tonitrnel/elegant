import * as React from 'react'
import Send, { Emoji, FormDataProps, EmojiVersion } from './send'
import List, { CommentList } from '@/component/comment/list'
import Pagination from './pagination'
import { Comment as CommentItem } from './type'
import Header from './header'
import classes from './index.styl'
import md5 from 'crypto-js/md5'
// import unified from 'unified'
// import markdown from 'remark-parse'
// import stringify from 'rehype-stringify'
import moment from 'moment'
import db from './leancloud'

// const QueryIPURL = 'https://api.ip.sb/geoip'

interface CommentProps {
  className?: string
  enable?: boolean
}

const avatar = {
  cdn: 'https://gravatar.loli.net/avatar/',
  ds: ['mp', 'identicon', 'monsterid', 'wavatar', 'robohash', 'retro', 'hide'],
  params: 'retro',
  version: 1.0
}

interface State {
  data: CommentItem[]
  replyObject?: CommentItem
  emoji: Emoji[]
  loading: boolean
  count: number
  current: number
}

export default class Comment extends React.Component<CommentProps, State> {
  state: State = {
    data: [],
    emoji: [],
    loading: true,
    count: 0,
    current: 1
  }
  id!: string
  // ip: string | null = null
  async loadEmoji() {
    const emoji: Emoji[] = await fetch(
      `https://s1.wktrf.com/emoji/index.json?v=${EmojiVersion}`
    ).then(res => res.json())
    this.setState({ emoji })
  }
  // parse comment content
  parser(data: string): string {
    const { emoji } = this.state
    return (
      data
        // 链接替换
        // 不能使用前置断言
        // 防止匹配到图片(^|[^(])协议((?:http|https):\/\/域[\w-]+ 上级域(?:\.[\w-]+)+路径(?:[^\s]+)?)
        .replace(
          /(^|[^(])((?:http|https):\/\/[\w-]+(?:\.[\w-]+)+(?:[^\s]+)?)/gm,
          (_, u, m) =>
            `${u}<a title="一个未知的链接" class="link" target="_blank" rel="noopener" href="${m}">${m}</a>`
        )
        // 图片替换
        .replace(
          /!\[([^\[\]]+)]\((https:[^()]+)\)(@sticker)?/gm,
          (_, t, s, e) =>
            `<img class="${
              e ? 'sticker' : 'image'
            }" title="${t}" alt="${t}" src="${s}" />`
        )
        // 表情替换
        .replace(/:([~_a-z\u4e00-\u9fa5]+):/gm, (_, v) => {
          const arr = v.split('_')
          let prefix, name
          if (arr.length === 1) {
            name = arr[0]
            prefix = ''
          } else {
            name = arr[1]
            prefix = arr[0]
          }
          const group = emoji.find(v => v.prefix === prefix)
          if (!group) return _
          const item = group.children.find(v => v.name === name)
          if (!item) return _
          return `<img src="${item.src}" class="small" title="${item.name}" alt="${item.name}" />`
        })
    )
  }
  async componentDidMount() {
    if (typeof window === 'undefined') return void 0
    const { enable } = this.props
    if (!enable) return void 0
    await this.loadEmoji()
    this.id = md5(location.pathname.replace(/\/$/, '')).toString()
    try {
      await this.loadComments()
      // window.addEventListener('hashchange', this.hashListener)
    } catch (e) {
      console.error('评论加载出错')
    }
  }
  // structured data to fit the list component rendering
  serializer = (data: CommentItem[]): CommentList[] => {
    const list: CommentList[] = data.map(item => ({
      ...item,
      children: [],
      date: moment(item.date),
      parentObject: null,
      avatar: `${avatar.cdn}${item.avatar}?d=${avatar.params}&v=${avatar.version}`
    }))
    // 防止出现ID重复导致无限循环
    // let MAX_WHILE_COUNT = 0
    for (let d of list) {
      // let cur = d
      if (!d.rid || !d.rrid) continue
      const index = list.findIndex(v => v.id === d.rrid)
      if (index < 0) continue
      d.parentObject = list.find(v => v.id === d.id) || null
      list[index].children.push(d)
      // 依次向上查找节点
      // while (cur.rid && MAX_WHILE_COUNT < list.length) {
      //   MAX_WHILE_COUNT++
      //   const index = list.findIndex(v => v.id === cur.rid)
      //   if (index < 0) break
      //   if (!cur.parentObject) cur.parentObject = list[index]
      //   cur = list[index]
      // }
      // if (cur !== d) cur.children.push(d)
    }
    list.forEach(item => {
      if (item.rid) return void 0
      item.children = item.children.sort((p, n) =>
        p.date > n.date ? 1 : p.date < n.date ? -1 : 0
      )
    })
    return list.filter(item => !item.rid)
  }
  // getIp = async () => {
  //   if (this.ip) return this.ip
  //   const { ip } = await fetch(QueryIPURL).then(r => r.json())
  //   this.ip = ip
  //   return ip
  // }
  loadComments = async (current = 1) => {
    const result = await db.get(this.id, current)
    this.setState({
      data: result.list,
      count: result.count
    })
  }
  // generateItem = (data: CommentList[], parent?: CommentList) => {
  //   if (data.length === 0) return null
  //   const { reply, emoji } = this.state
  //   return (
  //     <ol
  //       className={classname(classes.commentList, {
  //         [classes.listChildren]: Boolean(parent)
  //       })}
  //       onClick={parent ? void 0 : this.onClick}
  //     >
  //       {data.map(item => (
  //         <li key={item.id} id={`comment-${item.id}`} className={classes.item}>
  //           <div className={classes.avatar}>
  //             <img
  //               src={`${avatar.cdn}${item.avatar}?d=${avatar.params}&v=${avatar.version}`}
  //               alt={`${item.nickname}的头像`}
  //             />
  //           </div>
  //           <div className={classes.metadata}>
  //             <cite>
  //               {item.url ? (
  //                 <a href={item.url}>{item.nickname}</a>
  //               ) : (
  //                 <span>{item.nickname}</span>
  //               )}
  //               <span className={classes.says}>说道：</span>
  //             </cite>
  //             <time dateTime={moment(item.date).toISOString()}>
  //               {moment(item.date).fromNow()}
  //             </time>
  //           </div>
  //           <div className={classes.actions}>
  //             <a
  //               className={classes.reply}
  //               href={`#reply-${item.id}`}
  //               title={`回复${item.nickname}`}
  //             >
  //               回复
  //             </a>
  //           </div>
  //           <p
  //             className={classes.content}
  //             dangerouslySetInnerHTML={{
  //               __html: parent
  //                 ? `<a class="${classes.at}" href="#comment-${parent.id}" rel="noreferrer noopener">@${parent.nickname}</a> ${item.content}`
  //                 : item.content
  //             }}
  //           />
  //           {reply === item.id && (
  //             <Send
  //               mode="reply"
  //               id={`reply-${item.id}`}
  //               onSubmit={this.onComment}
  //               onCancel={this.onCancelReply}
  //               onValidate={this.onCheckContent}
  //               emoji={emoji}
  //             />
  //           )}
  //           {this.generateItem(item.children, item)}
  //         </li>
  //       ))}
  //     </ol>
  //   )
  // }
  componentWillUnmount(): void {
    // 都卸载了，直接覆盖setState了
    // window.removeEventListener('hashchange', this.hashListener)
  }
  // hashListener = () => {
  //   const hash = location.hash
  //   // if (hash.includes('comment')) {
  //   //   const elm = document.querySelector<HTMLLIElement>(hash)
  //   //   if (!elm) return void 0
  //   //   requestAnimationFrame(() => {
  //   //     const { top, height } = elm.getBoundingClientRect()
  //   //     const { clientHeight } = document.documentElement
  //   //     const willTop = scrollY + top - (clientHeight - height) / 2
  //   //     scrollTo({
  //   //       top: willTop,
  //   //       behavior: 'smooth'
  //   //     })
  //   //   })
  //   //   return void 0
  //   // }
  // }
  // componentDidUpdate(
  //   prevProps: Readonly<CommentProps>,
  //   prevState: Readonly<CommentState>,
  //   snapshot?: any
  // ): void {
  //   if (prevState.data !== this.state.data) {
  //     this.hashListener()
  //   }
  // }
  // onClick = e => {
  //   const target = e.target as HTMLAnchorElement
  //   if (!target) return void 0
  //   if (target.classList.contains(classes.reply)) {
  //     e.preventDefault()
  //     const reply = target.hash.split('-')[1]
  //     if (!reply) return void 0
  //     if (location.hash !== target.hash) {
  //       history.pushState(null, document.title, location.pathname + target.hash)
  //     }
  //     this.setState({ replyObject: void 0 })
  //     return void 0
  //   }
  //   if (target.classList.contains(classes.at)) {
  //     e.preventDefault()
  //     if (location.hash !== target.hash) {
  //       history.pushState(null, document.title, location.pathname + target.hash)
  //     }
  //     const elm = document.querySelector<HTMLLIElement>(target.hash)
  //     if (!elm) return void 0
  //     scrollTo({
  //       top: scrollY + elm.getBoundingClientRect().top - 100,
  //       behavior: 'smooth'
  //     })
  //     return void 0
  //   }
  // }
  submit = async ({ nickname, content, email, url }: FormDataProps) => {
    const ua = window.navigator.userAgent
    const hash = md5(email)
    const { data, replyObject, count } = this.state
    let comment = {
      content: this.parser(content),
      nickname,
      url,
      email,
      ua,
      avatar: hash.toString(),
      la: navigator.language,
      origin: location.pathname
    }
    if (replyObject) {
      Object.assign(comment, {
        rid: replyObject.id,
        rrid: replyObject.rrid || replyObject.id
      })
      const result = await db.set(this.id, comment)
      data.push({
        ...comment,
        id: result.id as string,
        date: result.createdAt as Date
      })
      this.setState({ data })
    } else {
      const result = await db.set(this.id, comment)
      const cur_count = count + 1
      const current = Math.ceil(cur_count / 10)
      if (data.length % 10 === 0) {
        this.setState({
          data: [
            {
              ...comment,
              id: result.id as string,
              date: result.createdAt as Date
            }
          ],
          count: cur_count,
          current: current + 1
        })
      } else {
        data.push({
          ...comment,
          id: result.id as string,
          date: result.createdAt as Date
        })
        this.setState({ data, count: cur_count, current })
      }
    }
    scrollTo({
      top: document.body.scrollHeight
    })
  }
  cancelReply = () => {
    this.setState({ replyObject: void 0 })
    history.pushState(null, document.title, location.pathname)
  }
  onCheckContent = async (value: string) => {
    if (value.trim().length === 0) return '评论内容不能为空'
    if (value.length > 3000) return '你认真的吗？(⊙ˍ⊙)'
    return true
  }
  reply = id => {
    this.setState(({ data }) => {
      const replyObject = data.find(v => v.id === id)
      return { replyObject }
    })
    scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }
  pagingChange = async page => {
    const { current } = this.state
    if (current === page) return void 0
    this.setState({ current: page })
    await this.loadComments(page)
    const element = document.querySelector(`.${classes.comments}`)
    if (!element) return void 0
    scrollTo({
      top: scrollY + element.getBoundingClientRect().top - 100,
      behavior: 'smooth'
    })
  }
  track = id => {
    const element = document.querySelector<HTMLLIElement>(`#comment-${id}`)
    if (!element) return void 0
    const { top, height } = element.getBoundingClientRect()
    const { clientHeight } = document.documentElement
    const willTop = scrollY + top - (clientHeight - height) / 2
    scrollTo({
      top: willTop,
      behavior: 'smooth'
    })
  }
  render() {
    const { data, replyObject, emoji, count, current } = this.state
    const { enable } = this.props
    if (!enable)
      return (
        <section className={classes.comments}>
          <h2 className={classes.closedTips}>评论已关闭</h2>
        </section>
      )
    return (
      <section className={classes.comments}>
        <Header count={count} />
        <List
          onTrack={this.track}
          onReply={this.reply}
          dataSource={this.serializer(data)}
        />
        <Pagination
          onChange={this.pagingChange}
          current={current}
          limit={10}
          total={count}
        />
        <Send
          emoji={emoji}
          onValidate={this.onCheckContent}
          onCancel={this.cancelReply}
          onSubmit={this.submit}
          reply={replyObject}
        />
      </section>
    )
  }
}
