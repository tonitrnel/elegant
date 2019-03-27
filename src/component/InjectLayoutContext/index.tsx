import * as React from 'react'
import { LayoutContext, LayoutContextProps } from '../layout'

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
// todo: 编写高阶组件实现Query

// todo: 查看CSS不能使用-作为分割的原因
