import * as React from 'react'
import { Global, GlobalDataProps } from './index'

type FilterFn<DP> = (data: GlobalDataProps) => any

export default function inject<DP, OP = {}>(
  Component: React.ComponentType
) {
  return function filter(dispatch?: FilterFn<DP>) {
    return (props: OP) => (
      <Global.Consumer>
        {(value): React.ReactNode => {
          const data = value || {}
          const dispatchProps = dispatch ? dispatch(data) : data
          return <Component {...dispatchProps} {...props} />
        }}
      </Global.Consumer>
    )
  }
}
