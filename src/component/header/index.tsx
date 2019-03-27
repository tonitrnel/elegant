import { Link } from 'gatsby'
import React from 'react'
import classes from './index.styl'
import config from '@config'

import {InjectLayoutContext, InjectProps} from '@/component/InjectLayoutContext'

// 从InjectLayoutContext接收一部分数据
type DispatchProps = {
  title: InjectProps['title']
}

function Header(props: DispatchProps) {
  const path = typeof window === 'object' ? location.pathname.split('/')[1] : null
  return (
    <header className={classes.header}>
      {/*<img className={classes.site__logo} src={logo} alt="site logo"/>*/}
      <h1 className={classes.site__title}>{props.title}</h1>
      <nav className={classes.menu}>
        <ul className={classes.menu__list}>
          {config.menu.map((v, i) => (
            <li className={`${classes.menu__item} ${path &&  v.path.includes(path) ? classes.menu__item__active : ''}`.trimRight()} key={i}>
              <Link to={v.path} children={v.name} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default InjectLayoutContext<DispatchProps>(Header, ({title}) => ({title}))
