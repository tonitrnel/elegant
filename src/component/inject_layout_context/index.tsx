import * as React from 'react'
import { LayoutContext, LayoutContextProps } from '../layout'
// 不能在Layout组件外面使用注入
export type InjectProps = LayoutContextProps
export function InjectLayoutContext<DP, P = {}>(
  Component: React.ComponentType<P & DP>,
  dispatch: (result: LayoutContextProps) => DP
) {
  return (props: P) => (
    <LayoutContext.Consumer>
      {result => {
        if (!result) throw new Error('LayoutComponent的context缺少数据')
        const dispatchResult = dispatch(result)
        return <Component {...props} {...dispatchResult} />
      }}
    </LayoutContext.Consumer>
  )
}
