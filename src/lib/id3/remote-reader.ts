import Reader from '@/lib/id3/reader'

export default class RemoteReader extends Reader {
  private readonly url: string
  constructor(url: string) {
    super()
    if (!url) throw new Error('url is required')
    this.url = url
  }
  async open() {
    const resp = await fetch(this.url, { method: 'HEAD' })
    const len = resp.headers.get('Content-Length')
    this.size = len ? Number(len) : 0
  }
  async read(len, pos) {
    return await fetch(this.url, {
      method: 'GET',
      headers: {
        Range: `bytes=${pos}-${pos + len - 1}`
      }
    }).then(res => res.arrayBuffer())
  }
  async close() {
    // waiting...
  }
}
