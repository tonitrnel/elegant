import * as React from 'react'
import classes from './index.styl'
import classname from '@/utils/classname'

const onClick = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default (props: { hide: boolean }) => (
  <button
    title="移动到顶部"
    className={classname(classes.toTop, {
      [classes.toTop__hide]: props.hide
    })}
    onClick={onClick}
    />
)
