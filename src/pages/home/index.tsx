import React from 'react'
import Layout from '../../component/layout'
import {
  InjectLayoutContext,
  InjectProps
} from '@/component/inject_layout_context'
import classes from './index.styl'

interface DispatchProps {
  homeMenu: InjectProps['homeMenu']
}

const Home = ({ homeMenu }: DispatchProps) => (
  <div className={classes.container}>
    <nav className={classes.menu}>
      <ul>
        {homeMenu.map((v, i) => (
          <li key={i}>
            <a href={v.path} rel="noopener" children={v.name} />
          </li>
        ))}
      </ul>
    </nav>
    <footer className={classes.footer}>
      <div className={classes.link}>
        图片来源：<a href="//unsplash.com" rel="noopener" target="_blank">unsplash.com</a>
      </div>
    </footer>
  </div>
)
export default () => {
  const Component = InjectLayoutContext<DispatchProps>(Home, ({ homeMenu }) => ({
    homeMenu
  }))
  return (
    <Layout title="自然灵魂 - Natural soul" preConnect="//images.unsplash.com"  dnsPrefetch="//images.unsplash.com">
      <Component />
    </Layout>
  )
}
