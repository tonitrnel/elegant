import * as React from 'react'
// import leanCloud from 'leancloud-storage'
// import Valine from 'valine'
// import classes from './index.styl'


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
interface ComponentProps {
  className?: string
  appId: string
  appKey: string
}

export default (props: ComponentProps) => {
  // React.useEffect(() => {
  //   const result = valine.init({
  //     el: `.${classes.comment}`,
  //     appId: props.appId,
  //     appKey: props.appKey,
  //     placeholder: '在此输入评论..'
  //   })
  //   if (result.locale.error) {
  //     console.log('Comment Init failed')
  //     console.log(result.locale)
  //   } else {
  //     console.log('Comment Init')
  //   }
  // })
  // return <div className={`${classes.comment} ${props.className || ''}`.trimRight()}>评论不可用</div>
  return null
}
