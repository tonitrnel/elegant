import db from 'leancloud-storage'

if (typeof window !== 'undefined') {
  if (!db.applicationId || !db.applicationKey) {
    db.init({
      appId: '',
      appKey: '',
      serverURLs: 'https://0joladml.lc-cn-n1-shared.com'
    })
  }
}

export default db
