import React from 'react'
import { Link, graphql } from 'gatsby'
import Container from '@/component/container'
import classes from './index.styl'
import _ from 'lodash'

interface TagsPageProps {
  data: {
    allMarkdownRemark: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
  }
}

const getColor = (num) => '#'.padEnd(7, Math.ceil(160 - num * 160).toString(16).padStart(2, '0'))

export default (props: TagsPageProps) => {
  const tags = props.data.allMarkdownRemark.group.filter(
    tag => !!tag.fieldValue
  )
  const total = tags.map(value => value.totalCount).reduce((v, c) => v + c)
  return (
    <Container path="/archives" className={classes.tags} title='标签'>
      <h1>标签</h1>
      <p className={classes.counter}>{tags.length}个标签</p>
      <p className={classes.link}>
        <Link to="/archives">归档</Link> | <Link to="/categories">分类</Link> | <Link to="/tags">标签</Link>
      </p>
      <ul className={classes.list}>
        {tags.map((tag, i) => (
          <li key={i}>
            <Link title={`${tag.fieldValue}下存在${tag.totalCount}篇文章`} to={`/tags/${_.kebabCase(tag.fieldValue)}`}
                  style={{
                    fontSize: `${12 + Math.ceil(tag.totalCount / total * 16)}px`,
                    color: getColor(tag.totalCount / total)
                  }}>
              {tag.fieldValue}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
export const query = graphql`
    query {
        allMarkdownRemark(
            limit: 2000
            filter: { fields: { status: { eq: true } } }
        ) {
            group(field: fields___tags) {
                fieldValue
                totalCount
            }
        }
    }
`
