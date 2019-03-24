import * as React from 'react'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import { ReactNode } from 'react'

interface PageProps {
  children: any
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
  (children: PageProps['children']): (siteData: QueryData) => ReactNode
}
type MetaType = {
  name: string,
  content: string,
  [key: string]: string
}[]
// 为了接收两个组件的数据
const Wrapper: WrapperProps = (children) => {
  return ({site: {siteMetadata: data}}: QueryData) => {
    const meta: MetaType = [
      {
        name: 'description',
        content: data.description
      },
      {
        name: 'keywords',
        content: data.keywords
      }
    ]
    return (
      <>
        <Helmet title={data.title} meta={meta} htmlAttributes={{lang: 'zh-CN'}} />
        {children}
      </>
    )
  }
}
export default ({children}: PageProps) => <StaticQuery query={query} render={Wrapper(children)}/>
