import React, { FC, PropsWithChildren } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

const QUERY_DSL = graphql`
  query SiteMetadata {
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

interface IQueryResponse {
  site: {
    metadata: {
      author: string;
      title: string;
      language: string;
      config: {
        metadata: {
          google_search_console: string;
        };
      };
    };
  };
}

const Layout: FC<
  PropsWithChildren<{
    title?: string;
  }>
> = ({ title, children }) => {
  const {
    site: { metadata },
  }: IQueryResponse = useStaticQuery(QUERY_DSL);
  const {
    metadata: { google_search_console },
  } = metadata.config;
  return (
    <>
      <Helmet>
        <meta name="author" content={metadata.author} />
        <meta name="copyright" content={metadata.author} />
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
      <section id="layout" className="color-theme--dark">
        <main id="content">{children}</main>
        <footer>footer</footer>
      </section>
    </>
  );
};

export default Layout;
