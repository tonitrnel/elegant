import db from 'leancloud-storage'

if (typeof window !== 'undefined') {
  if (!db.applicationId || !db.applicationKey) {
    db.init({
      appId: '0JOLAdmlVLvjfdW8RL4klhkQ-gzGzoHsz',
      appKey: 'lLC1D5xhP2l8MGdtoTRPwSnj',
      serverURLs: 'https://0joladml.lc-cn-n1-shared.com'
    })
  }
}

export default db
