import React from 'react'
import Layout from '@/component/layout'
import Container from '@/component/container'

import classes from './index.styl'

export default () => (
  <Layout title={'找不到页面'}>
    <Container className={classes.page__404}>
      <h1>404</h1>
      <p>无法找到页面 ~</p>
      <p>Page not found ~</p>
    </Container>
  </Layout>
)
