import React from 'react'
import css from './pagination.styl'
import classname from '@/utils/classname'

interface Props {
  total: number
  current: number
  limit: number
  onChange: (page: number) => void
}

export default function(props: Props) {
  if (props.total === 0) return null
  const pages = Array.from({
    length: Math.ceil(props.total / props.limit)
  }).map((_, i) => i + 1)
  const handleClick = event => {
    const target = event.target as HTMLElement
    if (!target) return
    if (target.classList.contains(css.next)) {
      props.onChange(Math.min(props.current + 1, pages.length))
      return void 0
    }
    if (target.classList.contains(css.prev)) {
      props.onChange(Math.max(props.current - 1, 1))
      return void 0
    }
    if (target.classList.contains(css.number)) {
      props.onChange(Number(target.innerText) || props.current)
      return void 0
    }
  }
  return (
    <div className={css.pagingBox} onClick={handleClick}>
      <a
        className={classname(css.prev, {
          [css.hide]: props.current === 1
        })}
      >
        上一页
      </a>
      {pages.map(i => (
        <a
          key={i}
          className={classname(css.number, {
            [css.current]: props.current === i
          })}
        >
          {i}
        </a>
      ))}
      <a
        className={classname(css.next, {
          [css.hide]: props.current === pages.length
        })}
      >
        下一页
      </a>
    </div>
  )
}
