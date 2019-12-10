import { ID3Tag } from '@/lib/id3/id3-tag'
import { install } from '@/component/audio-player/component'

export default async function audioPlayer(
  audios: NodeListOf<HTMLAudioElement>
) {
  if (audios.length === 0) return
  const { default: load } = await import('@/lib/id3')
  Array.from(audios).forEach(audio => {
    load(audio.src).then(tags => {
      register(audio, tags)
    })
  })
}

interface AudioData {
  title: string
  cover: string
  artist: string
  duration: string
}
function readAlbumCover(images: any, ost: string): string[] {
  if (!Array.isArray(images) || images.length === 0) return []
  return images.map((image, index) => {
    const data = image.data as ArrayBuffer
    const blob = new Blob([data])
    const file = new File([blob], `${ost}-${index + 1}`, {
      type: image.mime || 'image/png'
    })
    return URL.createObjectURL(file)
  })
}
async function register(node: HTMLAudioElement, tags: ID3Tag | any = {}) {
  let title, artist, cover
  if (!node.parentNode) return void 0
  if (tags) {
    title = node.title || tags.title || '未知音乐'
    artist = node.getAttribute('artist') || tags.artist || '未知艺术家'
    cover =
      node.getAttribute('cover') ||
      readAlbumCover(tags.images, tags.album || '专辑封面')[0]
    node.removeAttribute('artist')
    node.removeAttribute('cover')
  }
  install(node, {
    title,
    artist,
    cover
  })
}
