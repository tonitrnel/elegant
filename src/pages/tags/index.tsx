import React from 'react'
import { Link, graphql } from 'gatsby'

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

export default (props: TagsPageProps) => {
  const tags = props.data.allMarkdownRemark.group.filter(
    tag => !!tag.fieldValue
  )
  return (
    <section>
      <div className="tags">
        <h1>已存在标签：</h1>
        <p>共有{tags.length}个标签</p>
        <ul>
          {tags.map((tag, i) => (
            <li style={{ padding: '10px' }} key={i}>
              <Link to={`/tags/${tag.fieldValue}`}>
                {tag.fieldValue} {`(${tag.totalCount})`}
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
      group(field: fields___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
