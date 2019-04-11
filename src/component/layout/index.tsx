import * as React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import { ReactNode, createContext } from 'react'
import './index.styl'

interface PageProps {
  children: ReactNode
  title?: string
  description?: string
  preConnect?: string | string[]
  dnsPrefetch?: string | string[]
  styles?: string | string[]
}
interface QueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      siteUrl: string
      menu: {
        name: string
        path: string
      }[]
      homeMenu: {
        name: string
        path: string
      }[]
    }
  }
}

const query = graphql`
  query {
      site {
          siteMetadata {
              title
              description
              keywords
              siteUrl
              menu{
                  name
                  path
              }
              homeMenu{
                  name
                  path
              }
          }
      }
  }
`
interface WrapperProps {
  (props: PageProps): (siteData: QueryData) => ReactNode
}
export type MetaProps = JSX.IntrinsicElements['meta'][]
export type LinkProps = JSX.IntrinsicElements['link'][]
export type LayoutContextProps = QueryData['site']['siteMetadata']
export const LayoutContext = createContext<LayoutContextProps | null>(null)
// 为了接收两个组件的数据
const Wrapper: WrapperProps = (props) => {
  return ({site: {siteMetadata: data}}: QueryData) => {
    const meta: MetaProps = [
      {
        name: 'description',
        content: props.description || data.description
      },
      {
        name: 'keywords',
        content: data.keywords
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
    const title = props.title ? `${props.title} - ${data.title}` : data.title
    return (
      <LayoutContext.Provider value={data}>
        <Helmet title={title} meta={meta} link={link} htmlAttributes={{lang: 'zh-CN'}} />
        {props.children}
      </LayoutContext.Provider>
    )
  }
}
export default (props: PageProps) => <StaticQuery query={query} render={Wrapper(props)}/>
