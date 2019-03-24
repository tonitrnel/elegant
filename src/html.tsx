import React from "react"

interface PageProps{
  htmlAttributes: object
  headComponents: {
    title: React.ReactNode
  }
  bodyAttributes: object
  preBodyComponents: []
  body: string
  postBodyComponents: []
}
export default function HTML(props: PageProps) {
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      className="wrapper"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    </body>
    </html>
  )
}
