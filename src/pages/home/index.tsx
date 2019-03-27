import React from 'react'
import Layout from '../../component/layout'
import { Link } from 'gatsby'
import classes from './index.styl'

const menuLink = [
  {
    title: '首页',
    url: '/'
  },
  {
    title: '日记',
    url: '/writing/'
  },
  {
    title: '分类',
    url: '/categories/'
  },
  {
    title: '标签',
    url: '/tags/'
  },
  {
    title: '归档',
    url: '/archive/1'
  }
]

export default () => (
  <Layout title="自然灵魂 - Natural soul">
    <div className={classes.main}>
      <nav className={classes.menu}>
        <ul>
          {menuLink.map((v, i) => (
            <li key={i}>
              <Link to={v.url} children={v.title} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </Layout>
)
