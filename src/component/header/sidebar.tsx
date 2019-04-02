import * as React from 'react'
import classes from './sidebar.styl'
import {
  InjectLayoutContext,
  InjectProps
} from '@/component/inject_layout_context'
import { Link } from 'gatsby'

interface DispatchProps {
  title: InjectProps['title']
  menu: InjectProps['menu']
}

const SidebarMobile = (props: DispatchProps) => {
  const { menu, title } = props
  const [isOpen, setOpenStatus] = React.useState(false)
  const ref = React.createRef<HTMLDivElement>()
  const path =
    typeof window === 'object' ? location.pathname.split('/')[1] : null
  const closeSidebarContainer = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      event.stopPropagation()
      event.preventDefault()
      setOpenStatus(false)
    }
  }
  if (typeof document === 'object') {
    React.useEffect(() => {
      if (isOpen) {
        document.documentElement.style.setProperty('overflow', 'hidden')
        document.addEventListener('click', closeSidebarContainer, true)
      } else {
        document.documentElement.style.removeProperty('overflow')
        document.removeEventListener('click', closeSidebarContainer, true)
      }
      return () => {
        document.documentElement.style.removeProperty('overflow')
        document.removeEventListener('click', closeSidebarContainer, true)
      }
    })
  }
  return (
    <aside className={classes.sidebar}>
      <button
        className={classes.sidebar__menu}
        onClick={() => setOpenStatus(true)}
      >
        <svg viewBox="0 0 1024 1024">
          <path d="M126.989 259.017h781.421c14.413 0 26.073-11.659 26.073-26.038 0-14.395-11.66-26.055-26.073-26.055h-781.421c-14.378 0-26.038 11.659-26.038 26.055 0.001 14.379 11.66 26.038 26.038 26.038zM908.412 779.971h-781.421c-14.378 0-26.038 11.66-26.038 26.057 0 14.395 11.659 26.037 26.038 26.037h781.421c14.413 0 26.073-11.642 26.073-26.037 0.002-14.397-11.659-26.057-26.071-26.057zM908.412 493.448h-781.421c-14.378 0-26.038 11.641-26.038 26.054 0 14.38 11.659 26.039 26.038 26.039h781.421c14.413 0 26.073-11.659 26.073-26.039 0.002-14.413-11.659-26.054-26.071-26.054z" />
        </svg>
      </button>
      <div
        ref={ref}
        className={`${classes.sidebar__container} ${
          isOpen ? classes.sidebar__container__open : ''
        }`.trimRight()}
      >
        <div className={classes.banner} />
        <h1 className={classes.site__title}>{title}</h1>
        <nav className={classes.menu}>
          <ul className={classes.menu__list}>
            {menu.map((v, i) => (
              <li
                className={`${classes.menu__item} ${
                  path && v.path.includes(path)
                    ? classes.menu__item__active
                    : ''
                }`.trimRight()}
                key={i}
              >
                <Link to={v.path} children={v.name} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
export default InjectLayoutContext<DispatchProps>(
  SidebarMobile,
  ({ title, menu }) => ({ title, menu })
)
