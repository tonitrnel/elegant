import React, { Fragment } from 'react'

interface Props {
  count: number
}

export default function(props: Props) {
  if (props.count === 0) {
    return (
      <Fragment>
        <h2>留言</h2>
      </Fragment>
    )
  }
  return (
    <Fragment>
      <h2>留言</h2>
      <span style={{ fontSize: '14px' }}>共有{props.count}条评论</span>
    </Fragment>
  )
}
