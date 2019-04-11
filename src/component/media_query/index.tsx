import * as React from 'react'
import Loadable from 'react-loadable'
import Responsive from 'react-responsive'

const getComponent = path =>
  Loadable({
    loader: () => import(`@/component/${path}`),
    loading: prop => {
      if (prop.error) return <div style={{color: 'red'}}>component loading error</div>
      return <div style={{display: 'none'}}>component loading</div>
    }
  })

interface ComponentProps {
  path: string
}
interface ToggleProps {
  desktopClassName: string
  mobileClassName: string
  children: React.ReactNode
}

export const Desktop = (props: any) => <Responsive {...props} minWidth={992} />
export const Mobile = (props: any) => <Responsive {...props} maxWidth={800} />

export const DesktopLoader = (props: ComponentProps) => {
  const AsyncComponent = getComponent(props.path)
  return <Desktop children={<AsyncComponent />} />
}
export const MobileLoader = (props: ComponentProps) => {
  const AsyncComponent = getComponent(props.path)
  return <Mobile children={<AsyncComponent />} />
}
export const Toggle = (props: ToggleProps) => (
  <>
    <Mobile>
      <div className={props.mobileClassName}>{props.children}</div>
    </Mobile>
    <Desktop>
      <div className={props.desktopClassName}>{props.children}</div>
    </Desktop>
  </>
)
