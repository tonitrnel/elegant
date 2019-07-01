import * as React from 'react'
import Frame, { FrameProps, GlobalDataProps } from '@/component/frame'
import classname from '@/utils/classname'
import ToTop from '../to_top'
import { Link } from 'gatsby'
import classes from './index.styl'

interface ContainerProps extends Omit<FrameProps, 'getGlobalData'> {
  className?: string
  children: React.ReactNode
  path?: string
}

export default function Container(props: ContainerProps) {
  const { className, children, path, ...frameProps } = props
  const now = new Date()
  const [hideToTop, changeToTop] = React.useState(true)
  const [metadata, setMetadata] = React.useState<
    GlobalDataProps['metadata'] | any
  >({})
  const toTopCheck = () => {
    window.requestAnimationFrame(() => {
      if (scrollY < 300) {
        changeToTop(true)
      } else {
        changeToTop(false)
      }
    })
  }
  React.useEffect(() => {
    window.addEventListener('scroll', toTopCheck)
    return () => {
      window.removeEventListener('scroll', toTopCheck)
    }
  })
  const navigate = metadata.navigate || []
  const author = metadata.author || {}
  return (
    <Frame getGlobalData={gd => setMetadata(gd.metadata)} {...frameProps}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          <Link to="/">{metadata.title}</Link>
        </h1>
        <nav className={classes.navBar}>
          <ul>
            {navigate.map((item, index) => (
              <li
                className={classname({
                  [classes.item]: true,
                  [classes.item__active]: item.path === path
                })}
                key={index}
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={classname(classes.main, className)}>
        {children}
        <ToTop hide={hideToTop}/>
      </main>
      <footer className={classes.footer}>
        <section className={classes.footerInner}>
          <p>{author.note}</p>
          <p>
            <span className={classes.copyright}>
              <span>{now.getFullYear()}</span>
              <span>{author.name}. requiem.</span>
            </span>
          </p>
          <p className={classes.poweredBy}>
            <span>
              Powered By{' '}
              <a href="https://gatsbyjs.org" title="前往Gatsby官方网站">
                Gatsby
              </a>
            </span>
            <span>
              Theme By{' '}
              <a href="https://mostearly.com" title="前往mostearly.com">
                BaiJX
              </a>
            </span>
          </p>
          <p className={classes.siteRef}>
            <span>
              <a href="/rss.xml" target="_blank" title="查看RSS">
                RSS
              </a>
            </span>
            <span>
              <a href="/sitemap.xml" target="_blank" title="查看站点地图">
                SiteMap
              </a>
            </span>
            <span>
              <a
                href="//github.com/mostearly"
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
    </Frame>
  )
}
