import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '@/component/layout'
import Container from '@/component/container'
import classes from './index.styl'

interface PageProps {
  data: {
    allMarkdownRemark: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
  }
}

export default (props: PageProps) => {
  const categories = props.data.allMarkdownRemark.group.filter(
    tag => !!tag.fieldValue
  )
  return (
    <Layout title='分类'>
      <Container>
        <h1>分类</h1>
        <p>共设有{categories.length}个分类</p>
        <ul className={classes.category__list}>
          {categories.map((category, i) => (
            <li className={classes.category__item} key={i}>
              <Link title={`分类下共有${category.totalCount}篇文章`} to={`/categories/${category.fieldValue}`}>
                {category.fieldValue} {`(${category.totalCount})`}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}
export const Query = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: { fields: { status: { eq: true } } }
    ) {
      group(field: fields___category) {
        fieldValue
        totalCount
      }
    }
  }
`
