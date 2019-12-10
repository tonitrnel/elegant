import db from '@/helpers/cloud'

import { Comment } from './type'
interface Result {
  list: Comment[]
  count: number
}

type Listener = (data: any[]) => void

function composTo(data: db.Queriable): Comment {
  return {
    id: data.get('objectId'),
    nickname: data.get('nickname'),
    avatar: data.get('avatar'),
    content: data.get('content'),
    date: data.get('createdAt'),
    url: data.get('url'),
    ua: data.get('ua'),
    rid: data.get('rid'),
    rrid: data.get('rrid')
  }
}
const CLASS_NAME = 'comments'

export default class LeanCloud {
  static async get(id: string, no: number, size = 10): Promise<Result> {
    const query = new db.Query(CLASS_NAME)
    query.equalTo('pid', id)
    query.doesNotExist('rid')
    query.limit(size)
    query.skip((no - 1) * size)
    query.addAscending('createdAt')
    try {
      const rids: string[] = []
      const data = {
        list: (await query.find()).map(item => {
          rids.push(item.get('objectId'))
          return composTo(item)
        }),
        count: await query.count()
      }
      const reply = new db.Query(CLASS_NAME)
      reply.containedIn('rrid', rids)
      reply.addAscending('createdAt')
      data.list = data.list.concat((await reply.find()).map(composTo))
      return data
    } catch (e) {
      console.error(e)
      return {
        count: 0,
        list: []
      }
    }
  }
  static async set<T extends object>(id: string, data: T) {
    const Ct = db.Object.extend(CLASS_NAME)
    const comment = new Ct()
    comment.set('pid', id)
    Object.keys(data).forEach(key => {
      comment.set(key, data[key])
    })
    return await comment.save()
  }
  static async update<T>(id: string, data: T) {
    const comment = db.Object.createWithoutData(CLASS_NAME, id)
    Object.keys(data).forEach(key => {
      comment.set(key, data[key])
    })
    return await comment.save()
  }
  static async on(id: string, listener: Listener) {
    console.warn('未实现实时更新')
  }
}
