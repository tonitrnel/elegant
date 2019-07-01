import React from 'react'
import { Link, graphql } from 'gatsby'
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
    <Container path="/archives" className={classes.categories} title="分类">
      <h1>分类</h1>
      <p className={classes.counter}>{categories.length}个分类</p>
      <p className={classes.link}>
        <Link to="/archives">归档</Link> | <Link to="/categories">分类</Link> | <Link to="/tags">标签</Link>
      </p>
      <ul className={classes.list}>
        {categories.map((category, i) => (
          <li className={classes.item} key={i}>
            <Link
              title={`分类下共有${category.totalCount}篇文章`}
              to={`/categories/${category.fieldValue}`}
            >
              {category.fieldValue} {`(${category.totalCount})`}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
export const Query = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      filter: { fields: { status: { eq: true }, type: { eq: "post" } } }
    ) {
      group(field: fields___category) {
        fieldValue
        totalCount
      }
    }
  }
`
