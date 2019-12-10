import React from 'react'
import { Link, graphql } from 'gatsby'
import Container from '@/component/container'
import classes from './index.styl'
import _ from 'lodash'
import Header from '@/component/header'

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
      <Header title="标签" desc={`${tags.length}个标签`} />
      <ul className={classes.list}>
        {tags.map((tag, i) => (
          <li key={i}>
            <Link title={`${tag.fieldValue}下存在${tag.totalCount}篇文章`} to={`/tags/${_.kebabCase(tag.fieldValue)}`}
                  style={{ color: getColor(tag.totalCount / total) }}>
              {tag.fieldValue}({tag.totalCount})
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
