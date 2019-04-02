import React from 'react'
import Layout from '../../component/layout'
import {
  InjectLayoutContext,
  InjectProps
} from '@/component/inject_layout_context'
import { Toggle } from '@/component/media_query'
import { Link } from 'gatsby'
import classes from './index.styl'

interface DispatchProps {
  menu: InjectProps['menu']
}

const Home = ({ menu }: DispatchProps) => (
  <Toggle
    desktopClassName={classes.main}
    mobileClassName={classes.main__mobile}
  >
    <nav className={classes.menu}>
      <ul>
        {menu.map((v, i) => (
          <li key={i}>
            <Link to={v.path} children={v.name} />
          </li>
        ))}
      </ul>
    </nav>
  </Toggle>
)
export default () => {
  const Component = InjectLayoutContext<DispatchProps>(Home, ({ menu }) => ({
    menu
  }))
  return (
    <Layout title="自然灵魂 - Natural soul" preConnect="//images.unsplash.com"  dnsPrefetch="//images.unsplash.com">
      <Component />
    </Layout>
  )
}
