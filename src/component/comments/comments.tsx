import * as React from 'react'
import Valine from '@/lib/valine'


// View https://valine.js.org
// interface Valine {
//   el?: string,
//   appId: string
//   appKey: string
//   // View https://valine.js.org/avatar.html
//   avatar?: 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'hide'
//   meta?: 'nick' | 'mail' | 'link'
//   pageSize?: number
//   lang?: string
//   visitor?: boolean
//   highlight?: boolean
//   avatarForce?: boolean
//   recordIP?: boolean
//   placeholder?: string
//   path?: string
//   verify?: boolean
// }

// const valine = new Valine()
// if (typeof window === 'object') {
//   // @ts-ignore
//   if(!window.AV) window.AV = leanCloud
// }
//
export interface ComponentProps {
  className?: string
  appId: string
  appKey: string
  id: string
  title: string
}

export default (props: ComponentProps) => {
  const ref = React.createRef<HTMLDivElement>()
  React.useEffect(() => {
    if (ref.current) {
      new Valine({
        el: ref.current,
        appId: props.appId,
        appKey: props.appKey,
        postId: props.id,
        postTitle: props.title,
        placeholder: '在此输入评论..'
      })
    }
  })
  return <div ref={ref}>评论不可用</div>
  // return null
}
