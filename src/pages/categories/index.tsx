import React from 'react'
import { Link, graphql } from 'gatsby'

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
    <section>
      <div className="tags">
        <h1>已存在分类：</h1>
        <p>共有{categories.length}个分类</p>
        <ul>
          {categories.map((category, i) => (
            <li style={{ padding: '10px' }} key={i}>
              <Link to={`/categories/${category.fieldValue}`}>
                {category.fieldValue} {`(${category.totalCount})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
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
