import * as React from 'react'
import classes from './index.styl'
import {Toggle} from '@/component/media_query'

const now = new Date()

export default () => <footer className={classes.footer}>
  <Toggle desktopClassName={classes.footer__inner} mobileClassName={classes.footer__inner_mobile}>
    <p>🌺这里放点字应该不错</p>
    <p className={classes.copyright}>
      <i>©</i>
      <span>{now.getFullYear()}</span>
      <span>Natural soul</span>
    </p>
    <p className={classes.powered__by}>
      <span>Powered By <a href='https://gatsbyjs.org' title="前往Gatsby官方网站">Gatsby</a></span>
      <span>Theme By <a href='https://mostearly.com' title="前往mostearly.com">mostearly.com</a></span>
    </p>
    <p className={classes.site__data}>
      <span><a href="/rss.xml" target="_blank" title="查看RSS">RSS</a></span>
      <span><a href="/sitemap.xml" target="_blank" title="查看站点地图">SiteMap</a></span>
      <span><a href="//github.com/mostearly" target="_blank" title="前往Github">Github</a></span>
    </p>
  </Toggle>
</footer>
