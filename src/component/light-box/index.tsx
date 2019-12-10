import * as React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import classes from './index.styl'
import classname from '@/utils/classname'

const unmount = (node) => {
  unmountComponentAtNode(node)
  document.body.removeChild(node)
  document.documentElement.removeAttribute('style')
}
export function uninstall() {
  const target = document.querySelector(`.${classes.lightBox}`)
  if (!target) return void 0
  unmount(target)
}

interface LightBoxProps {
  src: string
}
// function getDelegateTarget<T extends HTMLElement>(
//   target: any,
//   currentTarget: any,
//   classname: string
// ): T | null {
//   if (!target || !currentTarget) return null
//   while (target !== currentTarget) {
//     if (target.matches(classname)) {
//       return target as T
//     }
//     target = target.parentNode as HTMLElement
//   }
//   return null
// }
export function LightBox(props: LightBoxProps) {
  const [status, changeStatus] = React.useState(true)
  const [isError, changeIsError] = React.useState(false)
  const onload = () => {
    changeStatus(false)
  }
  const onerror = () => {
    changeIsError(true)
    changeStatus(false)
  }
  return (
    <div onClick={uninstall} className={classes.lightBoxWrap}>
      {isError ? (
        <div className={classes.loadError}>
          <p>图片加载失败</p>
          <a href={props.src} target="_blank" rel="noopener noreferrer">
            单击访问
          </a>
        </div>
      ) : (
        <div
          className={classname(classes.loading, {
            [classes.show]: status
          })}
        >
          图片加载中
        </div>
      )}
      <img
        src={props.src}
        onLoad={onload}
        onError={onerror}
        className={classname(classes.img, {
          [classes.show]: !status && !isError
        })}
        alt="preview image"
      />
    </div>
  )
}
export default function install(event) {
  // 目前没发现a标签链接和img链接的区别
  let target = event.target
  while (!target.matches('a.gatsby-resp-image-link')) {
    if (target === event.currentTarget) return void 0
    target = target.parentNode
  }
  if (!target || typeof document !== 'object') return
  event.preventDefault()
  const element = document.createElement('div')
  element.className = classes.lightBox
  render(<LightBox src={target.href} />, element)
  document.body.append(element)
  document.documentElement.style.setProperty('overflow', 'hidden')
}
