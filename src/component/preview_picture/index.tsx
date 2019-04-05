import * as React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import classes from './index.styl'

const previewPictureID = 'previewPicture'

const closeViewPicture = () => {
  const container = document.querySelector(`#${previewPictureID}`)
  if (container) {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
  }
  document.documentElement.style.removeProperty('overflow')
}

export const PreviewPicture = (props: {src: string}) => {
  const [loadStatus, changeLoadStatus] = React.useState(false)
  const [isError, changeIsError] = React.useState(false)
  const ref = React.createRef<HTMLDivElement>()
  const image = new Image()
  image.onload = () => {
    if (ref.current) {
      ref.current.appendChild(image)
      changeLoadStatus(true)
    }
  }
  image.onerror = () => {
    changeIsError(true)
  }
  image.src = props.src
  return <div onClick={closeViewPicture} className={classes.view__picture} ref={ref} >
    {isError ? <span className={classes.load__failed}>图片加载失败</span> : <span className={classes.loading} style={{display: loadStatus ? 'none' : 'block'}}>图片加载中...</span>}
  </div>
}
export default (event: React.MouseEvent) => {
  const {classList} = event.target as HTMLElement
  // 目前没发现a标签链接和img链接的区别
  if (classList.contains('gatsby-resp-image-image')){
    event.preventDefault()
    const target = _.get(event.target, 'parentElement.parentElement.parentElement') as HTMLLinkElement | null
    if (!target || typeof document !== 'object') return
    const container = document.createElement('section')
    container.id = previewPictureID
    ReactDOM.render(<PreviewPicture src={target.href}/>, container)
    document.body.append(container)
    document.documentElement.style.setProperty('overflow', 'hidden')
  }
}
