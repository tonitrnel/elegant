import React, { FC, PropsWithChildren } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { MetadataProvider } from 'hooks/useMetadata';
import { Helmet } from 'react-helmet';
import { LayoutQuery } from 'types/gql';
import 'assets/styles/Global.less';
import './styles/Layout.less';
import clsx from 'utils/clsx';
import dayjs from 'dayjs';
import Header from 'components/Header';

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
        navs {
          name
          path
        }
      }
      buildTime
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
  const { metadata, buildTime } =
    useStaticQuery<LayoutQuery>(QUERY_DSL).site ?? {};
  const buildDate = buildTime ? dayjs(buildTime).fromNow() : null;
  const google_search_console =
    metadata?.config?.metadata?.google_search_console;
  const now = new Date();
  return (
    <MetadataProvider value={metadata ?? null}>
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
      <Header title={metadata?.author ?? ''} navs={metadata?.navs ?? []} />
      <main className={clsx('main', 'color-theme--dark', className)}>
        {children}
      </main>
      <footer className="footer">
        <section className="footer-inner">
          <p>
            <span className="copyright">&copy;2017-{now.getFullYear()}</span>
            <span className="site-name">{metadata?.title}.</span>
            {buildDate && (
              <span className="last-activity">最后活跃：{buildDate}</span>
            )}
          </p>
          <p className="powered-by">
            <span>
              Powered By{' '}
              <a href="https://gatsbyjs.org" title="前往Gatsby官方网站">
                Gatsby
              </a>
            </span>
            <span>
              Theme By{' '}
              <a href="https://github.com/piecego/elegant" title="主题仓库">
                Elegant
              </a>
            </span>
          </p>
          <p className="site-ref">
            <span>
              <a href={'/rss.xml'} target="_blank" title="查看RSS">
                RSS
              </a>
            </span>
            <span>
              <a href={'/sitemap.xml'} target="_blank" title="查看站点地图">
                SiteMap
              </a>
            </span>
            <span>
              <a
                href="//github.com/piecego"
                target="_blank"
                rel="noopener"
                title="前往Github"
              >
                Github
              </a>
            </span>
            <span>
              <a
                href="//analytics.google.com"
                target="_blank"
                rel="noopener"
                title="查看站点分析"
              >
                Google Analytics
              </a>
            </span>
          </p>
        </section>
      </footer>
    </MetadataProvider>
  );
};

export default Layout;
