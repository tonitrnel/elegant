import * as React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import classes from './index.styl'
import classname from '@/utils/classname'

const unmount = (node: HTMLDivElement) => {
  ReactDOM.unmountComponentAtNode(node)
  document.body.removeChild(node)
  document.documentElement.style.removeProperty('overflow')
}
const uninstall = () => {
  const target = document.querySelector<HTMLDivElement>(`.${classes.preview}`)
  if (!target) return void 0
  const container = target.parentElement as HTMLDivElement
  if (!container) return void 0
  unmount(container)
}

interface PreviewProps {
  src: string
}

export function Preview(props: PreviewProps) {
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
    <div onClick={uninstall} className={classes.preview}>
      {isError ? (
        <section className={classes.loadError}>
          <p>图片加载失败</p>
          <a href={props.src} target="_blank" rel="noopener noreferrer">
            单击访问
          </a>
        </section>
      ) : (
        <section
          className={classname(classes.loading, {
            [classes.show]: status
          })}
        >
          图片加载中
        </section>
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
export default function install(event: React.MouseEvent) {
  const { classList } = event.target as HTMLElement
  // 目前没发现a标签链接和img链接的区别
  if (!classList.contains('gatsby-resp-image-link')) return void 0
  event.preventDefault()
  const target = event.target as HTMLLinkElement
  if (!target || typeof document !== 'object') return
  const node = document.createElement('section')
  ReactDOM.render(<Preview src={target.href} />, node)
  document.body.append(node)
  document.documentElement.style.setProperty('overflow', 'hidden')
}
