import AV from 'leancloud-storage'
import md5 from 'blueimp-MD5'
import md from 'marked'
import xss from 'xss'
import autosize from 'autosize'

// 基于Valine 1.3.6改写 （https://github.com/xCss/Valine/blob/master/package.json）
export const version = '1.3.6'

interface Option {
  // Valine的初始挂载器，可以为CSS选择器或者HTML节点
  el: HTMLDivElement | string
  // 从LeanCloud的应用中得到的appID
  appId: string
  // 从LeanCloud的应用中得到的appKey
  appKey: string
  // 评论框占位符，默认为Just go go
  placeholder?: string
  // 评论回复邮件提醒
  notify?: boolean
  // 验证码服务
  verify?: boolean
  // 文章ID
  postId: string
  // 文章标题
  postTitle: string
  // Gravatar 头像
  avatar?:
    | 'mp'
    | 'identicon'
    | 'monsterid'
    | 'wavatar'
    | 'robohash'
    | 'retro'
    | ''
    | 'hide'
  // 评论分页
  pageSize?: number
}

const locales = {
  'zh-cn': {
    head: {
      nick: '昵称',
      mail: '邮箱',
      link: '网址(https://)'
    },
    tips: {
      comments: '评论',
      sofa: '快来做第一个评论的人吧~',
      busy: '还在提交中，请稍候...'
    },
    ctrl: {
      reply: '回复',
      ok: '好的',
      sure: '确认',
      cancel: '取消',
      confirm: '确认',
      continue: '继续',
      more: '查看更多...',
      try: '再试试?',
      preview: '预览',
      emoji: '表情'
    },
    error: {
      100: '初始化失败，请检查`av`参数.',
      101: '初始化失败，请检查`el`参数.',
      102: '初始化失败，未找到el节点.',
      103: '初始化失败，请检查你的AppId和AppKey.',
      401: '未经授权的操作，请检查你的AppId和AppKey.',
      403: '访问被api域名白名单拒绝，请检查你的安全域名设置.'
    },
    timeAgo: {
      seconds: '秒前',
      minutes: '分钟前',
      hours: '小时前',
      days: '天前',
      now: '刚刚'
    }
  }
} as const

const avatarSetting = {
  cdn: 'https://gravatar.loli.net/avatar/',
  ds: ['mp', 'identicon', 'monsterid', 'wavatar', 'robohash', 'retro', ''],
  params: '',
  hide: false
}
const dateFormat = (date: Date): string =>
  `${date.getFullYear()}-${`${date.getMonth() + 1}`.padStart(
    2,
    '0'
  )}-${`${date.getDate()}`.padStart(2, '0')} ${`${date.getHours()}`.padStart(
    2,
    '0'
  )}:${`${date.getMinutes()}`.padStart(2, '0')}`

type Message<T> = {
  show: (text?: string, autoClose?: boolean) => T
  hide: () => T
}

type Comment = {
  id: string
  avatar: string
  nick: string
  content: string
  date: Date
  link: string
}

export default class Valine {
  el!: HTMLElement
  pageSize!: number
  messageId!: any
  locale = locales['zh-cn']
  option!: Option
  avatarSetting = { ...avatarSetting }
  message!: Message<this>
  ip!: string
  query = (...k) => {
    const len = k.length
    if (len === 1) {
      const notExist = new AV.Query('Comments')
      notExist.doesNotExist('rid')
      const isEmpty = new AV.Query('Comments')
      isEmpty.equalTo('rid', '')
      const q = AV.Query.or(notExist, isEmpty)
      q.equalTo('id', decodeURI(k[0]))
      q.addDescending('createdAt')
      q.addDescending('insertedAt')
      return q
    } else {
      const ids = JSON.stringify(k[1]).replace(/([\[\]])/g, '')
      const cql = `select * from Comments where rid in (${ids}) order by -createdAt,-createdAt`
      return AV.Query.doCloudQuery(cql)
    }
  }
  getIp = async () => {
    if (this.ip) return this.ip
    const result = await fetch('https://mostearly.com/api/ip')
    const data = await result.json()
    this.ip = data.ip
    return data.ip
  }
  constructor(option: Option) {
    if (!option) return
    if (typeof document === 'undefined') return
    const { appId, appKey, el, avatar, pageSize = 10 } = option
    if (!appKey || !appId) throw new Error(this.locale.error['103'])
    if (!el) {
      throw new Error(this.locale.error['101'])
    }
    const element = typeof el === 'string' ? document.querySelector(el) : el
    if (!(element instanceof HTMLElement)) {
      throw new Error(this.locale.error['102'])
    }
    this.option = option
    this.avatarSetting.hide = avatar === 'hide'
    this.avatarSetting.params = `?d=${
      avatar && avatarSetting.ds.includes(avatar) ? avatar : 'mp'
    }&v=${version}`
    this.el = element
    this.el.classList.add('v')
    this.pageSize = pageSize
    if (AV.applicationId || AV.applicationKey) {
      AV.applicationKey = ''
      AV.applicationId = ''
    }
    AV.init({ appKey, appId })
    this.init()
  }
  init() {
    const { placeholder = 'Just go go' } = this.option
    let cacheCommentsInfo: string[]
    try {
      cacheCommentsInfo = JSON.parse(localStorage.getItem(
        '__cacheCommentInfo'
      ) as string) || []
    } catch (e) {
      cacheCommentsInfo = []
    }
    const inputEls = ['nick', 'mail', 'link'].map((item, index) => {
      const type = ['text', 'email', 'url'][index]
      const required = [true, true, false][index]
      const defaultValue = cacheCommentsInfo[index] || ''
      return `<input name="${item}"  ${
        required ? 'required' : ''
      } placeholder="${
        this.locale.head[item]
      }" class="v-${item} v-input"  value="${defaultValue}" type="${type}" />`
    })

    // language=HTML
    this.el.innerHTML = `<form class="v-wrap" id="comments-form">
      <textarea id="v-editor" required class="v-textarea" placeholder="${placeholder}"></textarea>
      <div class="v-info">
        ${inputEls.join('')} 
        <button class="v-submit" type="submit">${
          this.locale.ctrl.reply
        }</button>
      </div>
</form>
<div class="v-form-message">正在提交中</div>
<div id="comments" class="comments">
    <h2 class="comments-count" data-count="0">0条评论</h2>
    <div class="comments-list"></div>
</div>
`
    const vFromMessage = this.el.querySelector(
      '.v-form-message'
    ) as HTMLDivElement
    this.message = {
      show: (text, autoClose = true) => {
        if (!text) return this
        if (this.messageId) {
          clearTimeout(this.messageId)
          this.message.hide()
          this.messageId = null
        }
        vFromMessage.innerHTML = text
        vFromMessage.style.setProperty('height', '30px')
        if (autoClose) this.messageId = setTimeout(this.message.hide, 1000)
        return this
      },
      hide: () => {
        vFromMessage.innerHTML = ''
        vFromMessage.style.setProperty('height', '0')
        return this
      }
    }
    const commentsFrom = this.el.querySelector('#comments-form')
    if (commentsFrom) {
      commentsFrom.addEventListener('submit', this.submitComment)
    }
    autosize(this.el.querySelector('#v-editor'))
    this.getComments()
  }
  changeCount(count?: number) {
    const countEl = this.el.querySelector<HTMLHeadingElement>('.comments-count')
    if (countEl) {
      if (typeof count !== 'number') {
        let oldCount = countEl.dataset.count ? Number(countEl.dataset.count) : 0
        oldCount++
        countEl.innerText = `${oldCount}条评论`
        countEl.dataset.count = oldCount.toString()
      } else {
        countEl.innerText = `${count}条评论`
        countEl.dataset.count = count.toString()
      }
    }
  }
  async getComments() {
    // const size = this.pageSize
    const query = AV.Query.or(new AV.Query('Comments'))
    query.equalTo('post_id', this.option.postId)
    query.addDescending('createdAt')
    query.addDescending('insertedAt')
    // query.limit(this.pageSize)
    // query.skip(no * size)
    try {
      const result = await query.find()
      // const count = await query.count()
      const comments = result.map(
        (comment): Comment => ({
          id: comment.id as string,
          nick: comment.get('nick'),
          avatar:
            this.avatarSetting.cdn +
            comment.get('emailHash') +
            this.avatarSetting.params,
          link: comment.get('link'),
          content: comment.get('content'),
          date: comment.get('date')
        })
      )
      this.changeCount(result.length)
      this.insertComment(comments)
    } catch (e) {
      console.log(e)
    }
  }
  insertFirstBeforeComment(comments: Comment[]) {
    const commentEls = comments.map(
      comment => `
      <div id="comment_${comment.id}" class="comment">
            <div >
                <img class="comment-avatar" src="${comment.avatar}" alt="${
        comment.nick
      }">
            </div>
            <div class="comment-inner">
                <a href="${
                  comment.link
                }" class="author-link" rel="noopener" target="_blank" ><span class="comment-nick">${
        comment.nick
      }</span></a>
                <time class="comment-time" datetime="${
                  comment.date
                }" title="${dateFormat(comment.date)}" >${timeAgo(
        comment.date
      )}</time>
                <div class="comment-content">
                    ${xss.filterXSS(comment.content)}
                </div>
            </div>
        </div>
    `
    )

    const commentsEl = this.el.querySelector<HTMLDivElement>('.comments-list')
    if (commentsEl) {
      const tempContainer = document.createElement('div')
      tempContainer.innerHTML = commentEls.join('')
      Array.from(tempContainer.children).forEach(commentEl => {
        commentsEl.insertBefore(commentEl, commentsEl.children[0])
      })
    }
  }
  insertComment(comments: Comment[]) {
    const commentEls = comments.map(
      comment => `
      <div id="comment_${comment.id}" class="comment">
            <div >
                <img class="comment-avatar" src="${comment.avatar}" alt="${
        comment.nick
      }">
            </div>
            <div class="comment-inner">
                <a href="${
                  comment.link
                }" rel="noopener" target="_blank" class="author-link" ><span class="comment-nick">${
        comment.nick
      }</span></a>
                <time class="comment-time" datetime="${
                  comment.date
                }" title="${dateFormat(comment.date)}" >${timeAgo(
        comment.date
      )}</time>
                <div class="comment-content">
                    ${xss.filterXSS(comment.content)}
                </div>
            </div>
        </div>
    `
    )
    const commentsEl = this.el.querySelector<HTMLDivElement>('.comments-list')
    if (commentsEl) {
      if (commentsEl.children.length > 0) {
        const tempContainer = document.createElement('div')
        tempContainer.innerHTML = commentEls.join('')
        Array.from(tempContainer.children).forEach(commentEl => {
          commentsEl.appendChild(commentEl)
        })
      } else {
        commentsEl.innerHTML = commentEls.join('')
      }
    }
  }
  getAcl = () => {
    let acl = new AV.ACL()
    acl.setPublicReadAccess(true)
    acl.setPublicWriteAccess(false)
    return acl
  }
  submitComment = async event => {
    if (!event) return
    event.preventDefault()
    const target = event.target as HTMLFormElement
    const submit = target.querySelector<HTMLButtonElement>(
      'button[type="submit"]'
    )
    if (!submit) return
    submit.disabled = true
    const inputs = Array.from(target.querySelectorAll('input')).map(input => ({
      name: input.name,
      value: input.value
    }))
    const commentEl = target.querySelector('textarea')
    if (!commentEl) {
      this.message.show('必需填写评论内容')
      submit.disabled = false
      return
    }
    const content = commentEl.value
    if (content && content.trim().length < 5) {
      this.message.show('内容也太少了吧')
      submit.disabled = false
      return
    }
    this.message.show('正在提交', false)
    const Ct = AV.Object.extend('Comments')
    const comment = new Ct()
    comment.set('post_id', this.option.postId)
    comment.set('post_title', this.option.postTitle)
    comment.set('date', new Date())
    comment.set('content', xss.filterXSS(md(content)))
    comment.set('nick', content)
    comment.set('ua', navigator.userAgent)
    comment.set('ip', await this.getIp())
    comment.set('href', location.href)
    inputs.forEach(input => {
      comment.set(input.name, input.value)
    })
    comment.set('emailHash', md5(comment.get('mail')))
    comment.setACL(this.getAcl())
    try {
      const result = await comment.save()
      console.log('提交成功', result.id)
      this.message.show('提交成功')
      commentEl.value = ''
      submit.disabled = false
      this.changeCount()
      this.insertFirstBeforeComment([
        {
          id: result.id,
          nick: comment.get('nick'),
          avatar:
            this.avatarSetting.cdn +
            comment.get('emailHash') +
            this.avatarSetting.params,
          link: comment.get('link'),
          content: comment.get('content'),
          date: comment.get('date')
        }
      ])
      localStorage.setItem(
        '__cacheCommentInfo',
        JSON.stringify([
          comment.get('nick'),
          comment.get('mail'),
          comment.get('link')
        ])
      )
    } catch (e) {
      console.log('提交失败', e)
      this.message.show('网络错误')
      submit.disabled = false
    }
  }
}
const timeAgo = (date: Date): string => {
  const oldTime = date.getTime()
  const currTime = new Date().getTime()
  const diffValue = currTime - oldTime

  const days = Math.floor(diffValue / (24 * 3600 * 1000))
  if (days === 0) {
    //计算相差小时数
    const leave1 = diffValue % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    const hours = Math.floor(leave1 / (3600 * 1000))
    if (hours === 0) {
      //计算相差分钟数
      const leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
      const minutes = Math.floor(leave2 / (60 * 1000))
      if (minutes === 0) {
        //计算相差秒数
        const leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        const seconds = Math.round(leave3 / 1000)
        return seconds + '秒前'
      }
      return minutes + '分钟前'
    }
    return hours + '小时前'
  }
  if (days < 0) return '刚刚'
  else if (days < 30) return days + '天前'
  else if (days < 365) return Math.floor(days / 30) + '月前'
  else return Math.floor(days / 365) + '年前'
}
