import React, { FC, PropsWithChildren } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { LayoutQuery } from 'types/gql';
import 'assets/styles/Global.less';
import clsx from 'utils/clsx';

const QUERY_DSL = graphql`
  query Layout {
    site {
      metadata: siteMetadata {
        author
        title
        language
        config {
          metadata {
            google_search_console
          }
        }
      }
    }
  }
`;

const Layout: FC<
  PropsWithChildren<{
    title?: string;
    lang?: string;
    className?: string;
    path?: string;
  }>
> = ({ title, children, lang, className, path = '/' }) => {
  const metadata = useStaticQuery<LayoutQuery>(QUERY_DSL).site?.metadata;
  const google_search_console =
    metadata?.config?.metadata?.google_search_console;
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: lang ?? metadata?.language ?? 'zh-CN' }}
        title={title}
        titleTemplate={
          title === metadata?.title
            ? metadata?.title
            : `%s | ${metadata?.title}`
        }
      >
        <meta name="author" content={metadata?.author as string} />
        <meta name="copyright" content={metadata?.author as string} />
        {google_search_console && (
          <meta
            name="google-site-verification"
            content={google_search_console}
          />
        )}
        <link
          rel="stylesheet"
          href="https://fonts.proxy.ustclug.org/css?family=Josefin+Sans|PT+Sans&display=swap"
        />
      </Helmet>
      <section id="layout" className={clsx('color-theme--dark', className)}>
        {children}
      </section>
    </>
  );
};

export default Layout;
