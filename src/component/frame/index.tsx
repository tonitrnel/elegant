import * as React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import moment from 'moment'
import 'moment/locale/zh-cn'
import './index.styl'
export { default as inject } from './inject'
export interface FrameProps {
  children: React.ReactNode
  title?: string
  description?: string
  preConnect?: string | string[]
  dnsPrefetch?: string | string[]
  styles?: string | string[]
  getGlobalData?: (globalData: GlobalDataProps) => void
}
interface QueryData {
  site: {
    metadata: {
      title: string
      description: string
      keywords: string
      url: string
      navigate: {
        name: string
        path: string
      }[]
      author: {
        name: string
        note: string
      }
    }
  }
}
moment.locale('zh-cn')

const query = graphql`
  query {
      site {
          metadata: siteMetadata {
              title
              description
              keywords
              url
              author{
                  name
                  note
              }
              navigate{
                  name
                  path
              }
          }
      }
  }
`
interface WrapperProps {
  (props: FrameProps): (siteData: QueryData) => React.ReactNode
}
export type MetaProps = JSX.IntrinsicElements['meta'][]
export type LinkProps = JSX.IntrinsicElements['link'][]
export interface GlobalDataProps {
  metadata?: QueryData['site']['metadata']
}
export const Global = React.createContext<GlobalDataProps | null>(null)
// 为了接收两个组件的数据
const Wrapper: WrapperProps = (props) => {
  return ({site: {metadata: metadata}}: QueryData) => {
    const meta: MetaProps = [
      {
        name: 'description',
        content: props.description || metadata.description
      },
      {
        name: 'keywords',
        content: metadata.keywords
      }
    ]
    const link: LinkProps = []
    if (props.dnsPrefetch) {
      const dnsPrefetch = Array.isArray(props.dnsPrefetch) ? props.dnsPrefetch : [props.dnsPrefetch]
      dnsPrefetch.forEach(href => {
        link.push({href, rel: "dns-prefetch"})
      })
    }
    if (props.preConnect) {
      const preConnect = Array.isArray(props.preConnect) ? props.preConnect : [props.preConnect]
      preConnect.forEach(href => {
        link.push({href, rel: "preconnect"})
      })
    }
    if (props.styles) {
      const styles = Array.isArray(props.styles) ? props.styles : [props.styles]
      styles.forEach(styleHref => {
        link.push({href: styleHref, rel: "stylesheet", type: "text/css"})
      })
    }
    const title = props.title ? `${props.title} - ${metadata.title}` : metadata.title
    const data: GlobalDataProps = {
      metadata
    }
    if (props.getGlobalData) props.getGlobalData(data)
    return (
      <Global.Provider value={data}>
        <Helmet title={title} meta={meta} link={link} htmlAttributes={{lang: 'zh-CN'}} />
        {props.children}
      </Global.Provider>
    )
  }
}
export function Frame(props: FrameProps) {
  return <StaticQuery query={query} render={Wrapper(props)}/>
}
export default Frame
