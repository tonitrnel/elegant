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
  return <div onClick={closeViewPicture} className={classes.view_picture}><img src={props.src} alt="preview picture"/></div>
}
export default (event: React.MouseEvent) => {
  const {classList} = event.target as HTMLElement
  // 目前没发现a标签链接和img链接的区别
  if (classList.contains('gatsby-resp-image-image')){
    event.preventDefault()
    const target = _.get(event.target, 'parentElement.parentElement.parentElement') as HTMLLinkElement | null
    if (!target) return
    const container = document.createElement('section')
    container.id = previewPictureID
    ReactDOM.render(<PreviewPicture src={target.href}/>, container)
    document.body.append(container)
    document.documentElement.style.setProperty('overflow', 'hidden')
  }
}
