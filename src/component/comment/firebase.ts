import app from 'firebase/app'
import 'firebase/firestore'

const project = app.initializeApp({
  apiKey: 'AIzaSyAujLDFnITL6NQQSNgaXwsOW3nTVCknpPc',
  authDomain: 'blog-4ea48.firebaseapp.com',
  databaseURL: 'https://blog-4ea48.firebaseio.com',
  projectId: 'blog-4ea48',
  storageBucket: 'blog-4ea48.appspot.com',
  messagingSenderId: '990902314213',
  appId: '1:990902314213:web:c20ca1d80e8c72c0'
})
const db = project.firestore().collection(`Posts`)
export default class Firebase {
  static async get(id: string) {
    const ref = db.doc(id).collection('Comments')
    const result = await ref.orderBy('date').limit(10).get()
    return result.docs.map((item) => {
      return {
        id: item.id,
        ...item.data()
      }
    })
  }
  static async set<T extends object>(id: string, data: T) {
    return await db
      .doc(id)
      .collection('Comments')
      .add(data)
  }
}
