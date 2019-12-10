const DBName = 'piecego-store'
class Database {
  idb!: IDBOpenDBRequest
  constructor() {
    if (typeof window !== 'undefined') {
      this.idb = window.indexedDB.open(DBName, 1)
      this.idb.addEventListener('upgradeneeded', this.init)
      this.idb.onblocked = () => {
        console.log('onblocked')
      }
      this.idb.onerror = () => {
        console.log('onerror')
      }
    }
  }
  // 初始化数据库结构
  init = () => {
    const db = this.idb.result
    // if (!db.objectStoreNames.contains('config')) {
    //   const test = db.createObjectStore('config', { keyPath: 'key' })
    //   test.createIndex('key', 'key', { unique: true })
    //   test.createIndex('value', 'value', { unique: false })
    // }
    if (!db.objectStoreNames.contains('post')) {
      const test = db.createObjectStore('post', { keyPath: 'id' })
      // test.createIndex('pid', 'pid', { unique: true })
      test.createIndex('url', 'url')
      test.createIndex('title', 'title')
      test.createIndex('date', 'date')
    }
  }
  add(name: string, data: any) {
    const db = this.idb.result
    const transaction = db.transaction(name, 'readwrite')
    const store = transaction.objectStore(name)
    store.add({
      ...data,
      date: new Date().toUTCString()
    })
  }
  has(name: string, key: string) {
    return new Promise((resolve, reject) => {
      const db = this.idb.result
      const transaction = db.transaction(name, 'readonly')
      const store = transaction.objectStore(name)
      const res = store.get(key)
      transaction.oncomplete = () => {
        resolve(res.result !== undefined && res.result !== null)
      }
      transaction.onerror = reject
    })
  }
  read(name: string, key: string) {
    return new Promise((resolve, reject) => {
      const db = this.idb.result
      const transaction = db.transaction(name, 'readonly')
      const store = transaction.objectStore(name)
      const res = store.get(key)
      transaction.oncomplete = () => {
        resolve(res.result)
      }
      transaction.onerror = reject
    })
  }
}

export default new Database()
