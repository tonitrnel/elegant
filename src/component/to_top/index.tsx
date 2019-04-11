import * as React from 'react'
import classes from './index.styl'

const onClick = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export default (props: {hide: boolean}) => <button title="移动到顶部" className={`${classes.to__top} ${props.hide ? classes.to__top__hide : ''}`.trimRight()} onClick={onClick}/>
