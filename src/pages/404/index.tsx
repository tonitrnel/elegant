import React from 'react'
import Container from '@/component/container'

import classes from './index.styl'

export default () => (
  <Container className={classes.error404} title={'找不到页面'}>
    <h1>404</h1>
    <p>无法找到页面 ~</p>
    <p>Page not found ~</p>
  </Container>
)
