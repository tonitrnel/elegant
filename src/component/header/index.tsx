import React, { Fragment } from 'react'
import classes from './index.styl'
import { Link } from 'gatsby'

interface Props {
  title: string
  desc: string
}

export default function(props: Props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <p className={classes.counter}>{props.desc}</p>
      <p className={classes.link}>
        <Link to="/archives">归档</Link>
        <Link to="/categories">分类</Link>
        <Link to="/tags">标签</Link>
      </p>
    </Fragment>
  )
}
