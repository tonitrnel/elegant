import React from 'react'
import { ReactComponent as IconClose } from '@/assets/images/close.svg'
import { ReactComponent as IconSuccess } from '@/assets/images/success.svg'
import { ReactComponent as EmojiIcon } from '@/assets/images/emoji.svg'
import classname from '@/utils/classname'
import { Comment } from './type'
import autosize from 'autosize'
import css from './send.styl'

export const EmojiVersion = '1.0.1'

export interface FormDataProps {
  email: string
  nickname: string
  url?: string
  content: string
}

interface State {
  form: FormDataProps
  info: {
    status: 'error' | 'success' | 'loading'
    show: boolean
    message: string
  }
  emojiBox: boolean
  emojiTab: number
}

export type Emoji = {
  name: string
  key: string
  icon: string
  prefix: string
  children: {
    id: string
    name: string
    src: string
  }[]
}

type Rule = {
  min?: number
  max?: number
  pattern?: RegExp
  required?: boolean
  message?: string
  validate?: (value: any) => Promise<boolean | string>
}
type Rules = {
  [filed: string]: Rule[]
}

interface SendProps {
  onSubmit(comment: FormDataProps): Promise<void>
  onCancel(): void
  id?: string
  emoji?: Emoji[]
  reply?: Comment
  onValidate?: Rule['validate']
}

interface EmojiProps {
  dataSource?: Emoji[]
  show: boolean
  tab: number
  onClick: (name: string) => void
  onChange: (index: number) => void
}
function Emoji(props: EmojiProps) {
  if (!props.dataSource) return null
  const group = props.dataSource[props.tab]
  if (!group) return null
  function handleEmojiClick(e) {
    if (e.button !== 0) return void 0
    const target = e.target as HTMLLIElement
    const id = Number(target.dataset.id)
    if (isNaN(id)) return void 0
    const select = group.children[id]
    if (!select) return void 0
    props.onClick(
      group.prefix ? `${group.prefix}_${select.name}` : `${select.name}`
    )
  }
  function handleTabClick(e) {
    let target = e.target
    while (!target.matches(`a.${css.tabLink}`)) {
      if (target === e.currentTarget) return void 0
      target = target.parentNode
    }
    const index = Number(target.dataset.index)
    if (!isNaN(index)) props.onChange(index)
  }
  return (
    <div className={classname(css.emojiBox, { [css.show]: props.show })}>
      <div className={css.emojiTitle}>
        <span>{group.name}</span>
      </div>
      <ul className={css.emojiWrap} onMouseDown={handleEmojiClick}>
        {group.children.map((emoji, idx) => (
          <li
            data-id={idx}
            className={css.emojiItem}
            title={emoji.name}
            key={emoji.id}
          >
            <img
              draggable={false}
              {...{
                'data-origin': `${emoji.src}?v=${EmojiVersion}`,
                loading: 'lazy'
              }}
              alt={`表情${emoji.name}`}
            />
          </li>
        ))}
      </ul>
      <div className={css.emojiTabs} onClick={handleTabClick}>
        {props.dataSource.map((item, idx) => (
          <a
            className={classname(css.tabLink, {
              [css.on]: idx === props.tab
            })}
            key={item.key}
            data-index={idx}
          >
            <img
              draggable={false}
              alt={item.name}
              src={`${item.icon}?v=${EmojiVersion}`}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

class Send extends React.Component<SendProps, State> {
  state: State = {
    form: {
      nickname: '',
      email: '',
      url: '',
      content: ''
    },
    info: {
      status: 'loading',
      show: false,
      message: ''
    },
    emojiBox: false,
    emojiTab: 0
  }
  editor: HTMLTextAreaElement | null = null
  rules: Rules = {}
  submitting = false
  componentDidMount(): void {
    if (this.editor) {
      autosize(this.editor)
    }
    const visitor = localStorage.getItem('@@piecego:visitor')
    if (visitor) {
      try {
        const { nickname, email, url } = JSON.parse(decodeURI(atob(visitor)))
        this.setState({
          form: {
            nickname,
            email,
            url,
            content: ''
          }
        })
      } catch (e) {}
    }
    this.emojiLazyHandle()
  }

  setField = (field: keyof State['form'], value: string): Promise<void> => {
    return new Promise(resolve => {
      this.setState(({ form }) => {
        form[field] = value
        return { form }
      }, resolve)
    })
  }
  setMessage = (
    message: string,
    status: State['info']['status'],
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
            message,
            status,
            show: false
          }
        })
      }, 2000)
    }
  }

  readMessage = () => {
    const { info } = this.state
    return (
      <p
        className={classname({
          [css.info]: true,
          [css.hide]: !info.show,
          [css.error]: info.status === 'error',
          [css.success]: info.status === 'success'
        })}
      >
        {info.status === 'success' ? (
          <IconSuccess className="icon" />
        ) : info.status === 'error' ? (
          <IconClose className="icon" />
        ) : null}
        <span>{info.message}</span>
      </p>
    )
  }
  fieldValueChange = ev => {
    this.setField(ev.target.name, ev.target.value)
  }
  getFieldDecorator = (config: {
    field: keyof State['form']
    label: string
    defaultValue?: string
    rules?: Rule[]
  }) => {
    return (element: React.ReactElement) => {
      const { form } = this.state
      const { field, defaultValue, label, rules } = config
      if (!form[field]) {
        form[field] = ''
      }
      if (rules) {
        this.rules[field] = rules
      }
      const value = form[field]
      return (
        <p className={css.item}>
          <label htmlFor={field}>{label}：</label>
          {React.cloneElement<React.InputHTMLAttributes<HTMLInputElement>>(
            element,
            {
              name: field,
              onChange: this.fieldValueChange,
              value,
              id: field,
              defaultValue
            }
          )}
        </p>
      )
    }
  }
  validateFields = async (): Promise<FormDataProps> => {
    const { form } = this.state
    for (let field of Object.keys(form)) {
      const rules = this.rules[field]
      const value = form[field]
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
        if (rule.validate) {
          const result = await rule.validate(form[field])
          if (result === false) throw new Error(rule.message)
          if (typeof result === 'string') throw new Error(result)
        }
      }
    }
    return form
  }
  insertEmoji = async (emojiName: string) => {
    if (!this.editor) return void 0
    this.editor.focus()
    const { selectionStart, selectionEnd } = this.editor
    const { value } = this.editor
    const start = value.substring(0, selectionStart)
    const end = value.substring(selectionEnd, value.length)
    await this.setField('content', `${start} :${emojiName}: ${end}`)
    // +4是::两个符号以及空格
    const pos = start.length + emojiName.length + 4
    this.editor.setSelectionRange(pos, pos)
    setTimeout(editor => editor.focus(), 0, this.editor)
    document.removeEventListener('click', this.closeEmojiBox)
    this.setState({ emojiBox: false })
  }
  changeEmojiTab = (index: number) => {
    const { emoji } = this.props
    if (!emoji) return void 0
    if (emoji[index]) this.setState({ emojiTab: index })
  }
  emojiLazyHandle() {
    const arr = document.querySelectorAll<HTMLImageElement>(
      `.${css.emojiWrap} img[data-origin]`
    )
    if (arr.length === 0) return void 0
    if ('loading' in HTMLImageElement.prototype) {
      arr.forEach(item => {
        if (item.dataset.origin) {
          item.src = item.dataset.origin
          item.removeAttribute('data-origin')
        }
      })
      return void 0
    }
    const ob = new IntersectionObserver(items => {
      items.forEach(item => {
        if (item.isIntersecting || item.intersectionRatio > 0) {
          const target = item.target as HTMLImageElement
          if (target.dataset.origin) {
            target.src = target.dataset.origin
            target.removeAttribute('data-origin')
          }
          ob.unobserve(target)
        }
      })
    })
    Array.from(arr).forEach(e => {
      if (!e.dataset.origin) return void 0
      ob.observe(e)
    })
  }
  componentDidUpdate(props) {
    // const { emoji } = this.props
    this.emojiLazyHandle()
    // if (emoji !== props.emoji) {
    //   this.emojiLazyHandle()
    // }
  }
  componentWillUnmount(): void {
    // 处理组件卸载后某些异步完成后出现设置state的情况
    // this.setState = () => void 0
    document.removeEventListener('click', this.closeEmojiBox)
  }
  closeEmojiBox = event => {
    const emojiBox = document.querySelector(`.${css.emojiBox}`)
    if (emojiBox && emojiBox.contains(event.target)) {
      return void 0
    }
    this.setState({ emojiBox: false })
    document.removeEventListener('click', this.closeEmojiBox)
  }
  openEmojiBox = () => {
    if (!this.editor) return void 0
    const { emojiBox } = this.state
    if (!emojiBox) {
      this.editor.focus()
      document.addEventListener('click', this.closeEmojiBox)
    }
    this.setState({ emojiBox: !emojiBox })
  }
  cancel = () => {
    const { onCancel } = this.props
    onCancel && onCancel()
    this.setField('content', '')
    autosize.update(this.editor)
  }
  submit = async e => {
    e.preventDefault()
    if (this.submitting) return void 0
    this.submitting = true
    this.setMessage('正在评论中...', 'loading', false)
    try {
      const data = await this.validateFields()
      await this.props.onSubmit(data)
      this.setMessage('评论成功', 'success')
      localStorage.setItem(
        '@@piecego:visitor',
        btoa(
          encodeURI(
            JSON.stringify({
              nickname: data.nickname,
              url: data.url,
              email: data.email
            })
          )
        )
      )
      this.setField('content', '')
      autosize.update(this.editor)
    } catch (e) {
      this.setMessage(e.message, 'error')
    }
    this.submitting = false
  }
  render() {
    const { id, reply, emoji, onValidate } = this.props
    const { emojiBox, emojiTab } = this.state
    return (
      <form
        id={id}
        onSubmit={this.submit}
        onReset={this.cancel}
        method="post"
        className={css.commentSend}
      >
        <div className={css.userInfo}>
          {this.getFieldDecorator({
            field: 'nickname',
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
          {this.getFieldDecorator({
            field: 'email',
            label: '邮箱(仅用作头像)',
            rules: [
              { required: true, message: '请输入邮箱地址' },
              {
                pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                message: '邮箱不符合规范'
              }
            ]
          })(<input type="text" />)}
          {this.getFieldDecorator({
            field: 'url',
            label: '博客',
            rules: [
              {
                pattern: /^(https?:\/\/)([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                message: 'URL地址不符合规范'
              }
            ]
          })(<input type="url" placeholder="https://" />)}
        </div>
        {this.getFieldDecorator({
          field: 'content',
          label: reply ? '回复' : '评论',
          rules: [
            { required: true, message: '请输入评论内容' },
            { validate: onValidate, message: '验证不通过' }
          ]
        })(
          <textarea
            placeholder={
              reply ? `@${reply.nickname}:` : '少年啊，快来评论一下吧'
            }
            ref={ref => (this.editor = ref)}
          />
        )}
        <div className={css.other}>
          {this.readMessage()}
          <button
            type="button"
            onClick={this.openEmojiBox}
            className={css.commentEmoji}
          >
            <EmojiIcon className="icon" />
          </button>
          <Emoji
            dataSource={emoji}
            tab={emojiTab}
            onClick={this.insertEmoji}
            onChange={this.changeEmojiTab}
            show={emojiBox}
          />
        </div>
        <button className={css.submit} type="submit">
          评论
        </button>
        <button className={css.cancel} type="reset" hidden={!reply}>
          取消回复
        </button>
      </form>
    )
  }
}
export default Send
