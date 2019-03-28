import * as React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import { ReactNode, createContext } from 'react'
import './index.styl'

interface PageProps {
  children: ReactNode
  title?: string
  description?: string
}
interface QueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      siteUrl: string
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
          }
      }
  }
`
interface WrapperProps {
  (props: PageProps): (siteData: QueryData) => ReactNode
}
type MetaType = {
  name: string,
  content: string,
  [key: string]: string
}[]
export type LayoutContextProps = QueryData['site']['siteMetadata']
export const LayoutContext = createContext<LayoutContextProps | null>(null)
// 为了接收两个组件的数据
const Wrapper: WrapperProps = (props) => {
  return ({site: {siteMetadata: data}}: QueryData) => {
    const meta: MetaType = [
      {
        name: 'description',
        content: props.description || data.description
      },
      {
        name: 'keywords',
        content: data.keywords
      }
    ]
    const title = props.title ? `${props.title} - ${data.title}` : data.title
    return (
      <LayoutContext.Provider value={data}>
        <Helmet title={title} meta={meta} htmlAttributes={{lang: 'zh-CN'}} />
        {props.children}
      </LayoutContext.Provider>
    )
  }
}
export default (props: PageProps) => <StaticQuery query={query} render={Wrapper(props)}/>
