import Loadable from 'react-loadable'
import * as React from 'react'
import "@/lib/valine/index.styl"

export default Loadable({
  loader: () => import(`./comments`),
  loading: prop => {
    if (prop.error)
      return <div style={{ color: 'red' }}>comments loading error</div>
    return <div>comments loading...</div>
  }
})
