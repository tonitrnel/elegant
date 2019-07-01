import * as React from 'react'
import classes from './index.styl'
import md5 from 'crypto-js/md5'
import classname from '@/utils/classname'
import { ReactComponent as IconClose } from '@/assets/images/close.svg'
import { ReactComponent as IconSuccess } from '@/assets/images/success.svg'
import moment, { Moment } from 'moment'
import autosize from 'autosize'
import firebase from './firebase'

interface FormDataProps {
  email: string
  nickname: string
  url?: string
  content: string
}

interface CommentFormState {
  form: FormDataProps
  info: {
    status: 'error' | 'success' | 'loading'
    show: boolean
    message: string
  }
}

type Rule = {
  min?: number
  max?: number
  pattern?: RegExp
  required?: boolean
  message?: string
}
type Rules = {
  [filed: string]: Rule[]
}

interface CommentFormProps {
  onSubmit(comment: FormDataProps): Promise<void>
  id?: string
  mode: 'reply' | 'comment'
  onCancel?(): void
  emoji?: Emoji[]
}
interface Emoji {
  name: string
  src: string
}
class CommentForm extends React.Component<CommentFormProps, CommentFormState> {
  state: CommentFormState = {
    form: {
      nickname: '',
      email: '',
      content: ''
    },
    info: {
      status: 'loading',
      show: false,
      message: ''
    }
  }
  editor: HTMLTextAreaElement | null = null
  rules: Rules = {}
  submitting = false
  componentDidMount(): void {
    if (this.editor) {
      autosize(this.editor)
    }
  }

  setField = (filed: keyof CommentFormState['form']) => {
    return (event: React.ChangeEvent | string) => {
      const { form } = this.state
      if (typeof event === 'string') {
        this.setState({ form: { ...form, [filed]: event } })
      } else {
        const target = event.target as HTMLInputElement
        this.setState({ form: { ...form, [filed]: target.value } })
      }
    }
  }
  setInfo = (
    message: string,
    status: CommentFormState['info']['status'],
    autoHide: boolean = true
  ) => {
    this.setState({
      info: {
        message,
        status,
        show: true
      }
    })
    if (autoHide) {
      setTimeout(() => {
        this.setState({
          info: {
            message: '',
            status: 'loading',
            show: false
          }
        })
      }, 2000)
    }
  }
  generateInfo = () => {
    const { info } = this.state
    return (
      <p
        className={classname({
          [classes.info]: true,
          [classes.info__hide]: !info.show,
          [classes.info__error]: info.status === 'error',
          [classes.info__success]: info.status === 'success'
        })}
      >
        {info.status === 'success' ? (
          <IconSuccess className={classname('icon', classes.loading)} />
        ) : info.status === 'error' ? (
          <IconClose className="icon" />
        ) : null}
        <span>{info.message}</span>
      </p>
    )
  }
  setItem = (config: {
    filed: keyof CommentFormState['form']
    label: string
    defaultValue?: string
    rules?: Rule[]
  }) => {
    return (element: React.ReactElement) => {
      const { form } = this.state
      const { filed, defaultValue, label, rules } = config
      if (!form[filed]) {
        form[filed] = ''
      }
      if (rules) {
        this.rules[filed] = rules
      }
      const value = form[filed]
      return (
        <p className={classes.formItem}>
          <label htmlFor={filed}>{label}：</label>
          {React.cloneElement<React.InputHTMLAttributes<HTMLInputElement>>(
            element,
            {
              name: filed,
              onChange: this.setField(filed),
              value,
              id: filed,
              defaultValue
            }
          )}
        </p>
      )
    }
  }
  validateFields = async (): Promise<FormDataProps> => {
    const { form } = this.state
    for (let filed of Object.keys(form)) {
      const rules = this.rules[filed]
      const value = form[filed]
      if (!rules) continue
      for (let rule of rules) {
        if (!value) {
          if (rule.required) throw new Error(rule.message)
          else break
        }
        if (rule.min && value.length < rule.min) throw new Error(rule.message)
        if (rule.max && value.length > rule.max) throw new Error(rule.message)
        if (rule.pattern && !rule.pattern.test(value))
          throw new Error(rule.message)
      }
    }
    return form
  }
  onSubmit = async e => {
    e.preventDefault()
    if (this.submitting) return void 0
    this.submitting = true
    this.setInfo('正在评论中...', 'loading', false)
    try {
      const data = await this.validateFields()
      await this.props.onSubmit(data)
      this.setInfo('评论成功', 'success')
      this.setField('content')('')
    } catch (e) {
      this.setInfo(e.message, 'error')
      // console.error(e.message)
    }
    this.submitting = false
  }
  insertEmoji = e => {
    if (e.button !== 0) return void 0
    const target = e.target as HTMLLIElement
    const emojiName = target.dataset.emoji
    if (!emojiName || !this.editor) return void 0
    const { selectionStart, selectionEnd } = this.editor
    const { content } = this.state.form
    const start = content.substring(0, selectionStart)
    const end = content.substring(selectionEnd, content.length)
    if (document.activeElement === this.editor) {
      // if (selectionStart === selectionEnd) {
      //   console.log('插入', selectionEnd)
      // } else {
      //   console.log('替换', selectionStart, selectionEnd)
      // }
      this.setField('content')(`${start} :${emojiName}: ${end}`)
    } else {
      // console.log('追加')
      this.setField('content')(`${content} :${emojiName}:`)
    }
    setTimeout(editor => editor.focus(), 0, this.editor)
    // console.log(emojiName, )
  }
  render() {
    const { id, mode, onCancel, emoji } = this.props
    return (
      <form
        id={id}
        onSubmit={this.onSubmit}
        onReset={onCancel}
        method="post"
        className={classname(classes.form, {
          [classes.formReply]: mode === 'reply',
          [classes.formComment]: mode === 'comment'
        })}
      >
        {mode === 'comment' && <p className={classes.note}>坐等你的评论~</p>}
        {this.setItem({
          filed: 'nickname',
          label: '昵称',
          rules: [
            {
              required: true,
              message: '请输入昵称'
            },
            {
              max: 8,
              message: '昵称太长'
            }
          ]
        })(<input />)}
        {this.setItem({
          filed: 'email',
          label: '邮箱(仅用作头像)',
          rules: [
            { required: true, message: '请输入邮箱地址' },
            {
              pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
              message: '邮箱不符合规范'
            }
          ]
        })(<input type="text" />)}
        {this.setItem({
          filed: 'url',
          label: '博客',
          rules: [
            {
              pattern: /^(https?:\/\/)([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
              message: 'URL地址不符合规范'
            }
          ]
        })(<input type="url" placeholder="https://" />)}
        {this.setItem({
          filed: 'content',
          label: '评论',
          rules: [
            { required: true, message: '请输入评论内容' },
            { max: 300, message: '评论内容过长（最多300字）' }
          ]
        })(<textarea ref={ref => (this.editor = ref)} />)}
        {emoji && (
          <ul className={classes.emojiList} onMouseDown={this.insertEmoji}>
            {emoji.map((item, index) => (
              <li
                data-emoji={item.name}
                className={classes.emojiItem}
                title={item.name}
                key={index}
              >
                <img
                  src={item.src}
                  draggable={false}
                  alt={`表情${item.name}`}
                />
              </li>
            ))}
          </ul>
        )}
        {this.generateInfo()}
        <button type="submit">评论</button>
        <button type="reset" hidden={mode !== 'reply'}>
          取消
        </button>
      </form>
    )
  }
}

interface CommentProps {
  className?: string
  enable?: boolean
}

type CommentItem = {
  id: string
  nickname: string
  avatar: string
  content: string
  date: number
  url?: string
  parent: string | null
}
const avatar = {
  cdn: 'https://gravatar.loli.net/avatar/',
  ds: ['mp', 'identicon', 'monsterid', 'wavatar', 'robohash', 'retro', ''],
  params: 'mp',
  hide: false
}

interface CommentList extends Omit<CommentItem, 'date'> {
  children: CommentList[]
  date: Moment
}

interface CommentState {
  data: CommentItem[]
  reply: string | null
  emoji: Emoji[]
  loading: boolean
}

export default class Comment extends React.Component<
  CommentProps,
  CommentState
> {
  state: CommentState = {
    data: [],
    reply: null,
    emoji: [],
    loading: true
  }
  id: string | null = null
  ip: string | null = null
  async loadEmoji() {
    const emoji: Emoji[] = await fetch(
      'https://static.wktrf.com/emoji/index.json'
    ).then(res => res.json())
    this.setState({
      emoji: emoji.map(({ name, src }) => ({
        name,
        src: `https://static.wktrf.com/${encodeURI(src)}`
      }))
    })
  }
  async componentDidMount() {
    const { enable } = this.props
    if (!enable) return void 0
    await this.loadEmoji()
    try {
      await this.getCommentList()
    } catch (e) {
      console.error('评论加载出错')
    }
  }
  transitionText = (data: string): string => {
    const { emoji } = this.state
    return data.replace(/(?::([\w\u4e00-\u9fa5])+:)/g, value => {
      const item = emoji.find(v => `:${v.name}:` === value)
      return item
        ? `<img src="${item.src}" class="${classes.emoji}" alt="表情${item.name}" />`
        : value
    })
  }
  transition = (data: CommentItem[]): CommentList[] => {
    const list: CommentList[] = data.map(item => ({
      ...item,
      children: [],
      date: moment(item.date)
    }))
    for (let item of list) {
      if (!item.parent) continue
      const index = data.findIndex(v => v.id === item.parent)
      if (index >= 0) {
        list[index].children.push(item)
      }
    }
    return list.filter(item => !item.parent)
  }
  getId = async () => {
    const { pathname } = window.location
    if (this.id) return this.id
    this.id = md5(pathname).toString()
    return this.id
  }
  getIp = async () => {
    if (this.ip) return this.id
    const { ip } = await fetch('https://mostearly.com/api/ip').then(res =>
      res.json()
    )
    this.ip = ip
    return ip
  }
  getCommentList = async () => {
    const data = (await firebase.get(await this.getId())) as CommentItem[]
    this.setState({
      data: data.map(item => ({
        ...item,
        content: this.transitionText(item.content)
      }))
    })
  }
  generateItem = (data: CommentList[], parent?: CommentList) => {
    if (data.length === 0) return null
    const { reply, emoji } = this.state
    return (
      <ol
        className={classname(classes.commentList, {
          [classes.listChildren]: Boolean(parent)
        })}
        onClick={parent ? void 0 : this.onClick}
      >
        {data.map((item, index) => (
          <li key={index} id={`comment-${item.id}`} className={classes.item}>
            <div className={classes.avatar}>
              <img
                src={`${avatar.cdn}${item.avatar}?d=${avatar.params}`}
                alt={`${item.nickname}的头像`}
              />
            </div>
            <div className={classes.metadata}>
              <cite>
                {item.url ? (
                  <a href={item.url}>{item.nickname}</a>
                ) : (
                  <span>{item.nickname}</span>
                )}
                <span className={classes.says}>说道：</span>
              </cite>
              <time dateTime={moment(item.date).toISOString()}>
                {moment(item.date).fromNow()}
              </time>
            </div>
            <div className={classes.actions}>
              <a
                className={classes.reply}
                href={`#reply-${item.id}`}
                title={`回复${item.nickname}`}
              >
                @回复
              </a>
            </div>
            <p
              className={classes.content}
              dangerouslySetInnerHTML={{
                __html: parent
                  ? `<a class="${classes.at}" href="#comment-${parent.id}" rel="noreferrer noopener">@${parent.nickname}</a> ${item.content}`
                  : item.content
              }}
            />
            {reply === item.id && (
              <CommentForm
                mode="reply"
                id={`reply-${item.id}`}
                onSubmit={this.onComment}
                onCancel={this.onCancelReply}
                emoji={emoji}
              />
            )}
            {this.generateItem(item.children, item)}
          </li>
        ))}
      </ol>
    )
  }
  componentDidUpdate(
    prevProps: Readonly<CommentProps>,
    prevState: Readonly<CommentState>,
    snapshot?: any
  ): void {
    if (prevState.data !== this.state.data) {
      const hash = location.hash
      if (!hash) return void 0
      if (hash.includes('comment')) {
        const elm = document.querySelector<HTMLLIElement>(hash)
        if (!elm) return void 0
        scrollTo({
          top: scrollY + elm.getBoundingClientRect().top - 100
        })
        return void 0
      }
      if (hash.includes('reply')) {
        const reply = hash.split('-')[1]
        const elm = document.querySelector(`#comment-${reply}`)
        if (!elm) return void 0
        this.setState({ reply })
        scrollTo({
          top: scrollY + elm.getBoundingClientRect().top - 100
        })
      }
    }
  }

  onClick = e => {
    const target = e.target as HTMLAnchorElement
    if (!target) return void 0
    if (target.classList.contains(classes.reply)) {
      e.preventDefault()
      const reply = target.hash.split('-')[1]
      if (!reply) return void 0
      if (location.hash !== target.hash) {
        history.pushState(null, document.title, location.pathname + target.hash)
      }
      this.setState({ reply })
      return void 0
    }
    if (target.classList.contains(classes.at)) {
      e.preventDefault()
      if (location.hash !== target.hash) {
        history.pushState(null, document.title, location.pathname + target.hash)
      }
      const elm = document.querySelector<HTMLLIElement>(target.hash)
      if (!elm) return void 0
      scrollTo({
        top: scrollY + elm.getBoundingClientRect().top - 100,
        behavior: 'smooth'
      })
      return void 0
    }
  }
  onComment = async ({ nickname, content, email, url }: FormDataProps) => {
    const date = Date.now()
    const ua = window.navigator.userAgent
    const hash = md5(email)
    const { data, reply = null } = this.state
    const comment = {
      content,
      nickname,
      url,
      avatar: hash.toString(),
      date,
      ua,
      parent: reply,
      ip: await this.getIp()
    }
    const result = await firebase.set(await this.getId(), comment)
    data.push({
      ...comment,
      id: result.id,
      content: this.transitionText(content)
    })
    this.setState({ data })
  }
  onCancelReply = () => {
    this.setState({ reply: null })
    history.pushState(null, document.title, location.pathname)
  }
  render() {
    const { data, reply, emoji } = this.state
    const { enable } = this.props
    if (!enable)
      return (
        <section className={classes.comments}>
          <h2 className={classes.closedTips}>Comments are closed</h2>
        </section>
      )
    return (
      <section className={classes.comments}>
        <h2 className={classes.commentTitle}>
          留言<i>|</i>评论
        </h2>
        <p>Comments: {data.length}</p>
        {this.generateItem(this.transition(data))}
        {data.length === 0 && (
          <div className={classes.commentTips}>还没有评论，快来评论吧</div>
        )}
        {!reply && (
          <CommentForm mode="comment" emoji={emoji} onSubmit={this.onComment} />
        )}
      </section>
    )
  }
}
