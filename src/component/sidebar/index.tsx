import * as React from 'react'
import classes from './index.styl'
import {MobileLoader, Desktop} from '@/component/media_query'

export default function Sidebar(){
  return (
    <>
      <Desktop>
        <aside className={classes.sidebar}>
          <div className={classes.banner} />
        </aside>
      </Desktop>
      <MobileLoader path={'sidebar/mobile'}/>
    </>
  )
}
