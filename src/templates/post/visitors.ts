import db from '@/helpers/cloud'

const CLASS_NAME = 'statistics'
export default class Visitors {
  static async read(id: string) {
    const query = new db.Query(CLASS_NAME)
    query.equalTo('pid', id)
    query.select('views')
    const result = await query.find()
    return result.map(item => ({ views: item.get('views'), id: item.get('objectId') }))[0]
  }
  static async init(id: string, data) {
    const Ct = db.Object.extend(CLASS_NAME)
    const comment = new Ct()
    comment.set('pid', id)
    Object.keys(data).forEach(key => {
      comment.set(key, data[key])
    })
    return await comment.save()
  }
  static async add(id: string) {
    const statistics = db.Object.createWithoutData(CLASS_NAME, id)
    statistics.increment('views')
    return await statistics.save()
  }
}
