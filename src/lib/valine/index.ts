import AV from 'leancloud-storage'
import md5 from 'blueimp-MD5'
import md from 'marked'
import xss from 'xss'

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
    this.option = option
    this.avatarSetting.hide = avatar === 'hide'
    this.avatarSetting.params = `?d=${
      avatar && avatarSetting.ds.includes(avatar) ? avatar : 'mp'
    }&v=${version}`
    this.el.classList.add('v')
    this.pageSize = pageSize
    if (AV.applicationId || AV.applicationKey) {
      AV.applicationKey = ''
      AV.applicationId = ''
    }
    AV.init({ appKey, appId })
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
      return result.map(
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
    } catch (e) {
      console.error(e)
    }
  }

  getAcl = () => {
    let acl = new AV.ACL()
    acl.setPublicReadAccess(true)
    acl.setPublicWriteAccess(false)
    return acl
  }
  submitComment = async event => {
    const Ct = AV.Object.extend('Comments')
    const comment = new Ct()
    comment.set('post_id', this.option.postId)
    comment.set('post_title', this.option.postTitle)
    comment.setACL(this.getAcl())
    try {
      const result = await comment.save()
    } catch (e) {
    }
  }
}
