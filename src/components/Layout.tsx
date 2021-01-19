import React, { FC, PropsWithChildren } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const QUERY_DSL = graphql`
    query siteTitleQuery{
        site{
            siteMetadata{
                author
                title
            }
        }
    }
`

const Layout: FC<PropsWithChildren<{
  title?: string
}>> = (props) => {
  const result = useStaticQuery(QUERY_DSL)
  console.log(result)
  return (<>
    <Helmet>
      <title>{result.site.siteMetadata.title}</title>
    </Helmet>
    {props.children}
  </>)
}

export default Layout