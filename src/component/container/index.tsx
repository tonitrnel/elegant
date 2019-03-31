import * as React from 'react'
import classes from './index.styl'
import Header from '@/component/header'
import Sidebar from '@/component/sidebar'
import Footer from '@/component/footer'
import ToTop from '@/component/to_top'

interface ComponentProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function Container({
  children,
  className,
  style
}: ComponentProps) {
  const [hideToTop, setHideToTop] = React.useState(true)
  const cdTop = () =>
    requestAnimationFrame(() => {
      if (scrollY < 300) {
        setHideToTop(true)
      } else {
        setHideToTop(false)
      }
    })
  if (typeof window === 'object') {
    React.useEffect(() => {
      window.addEventListener('scroll', cdTop)
      return () => {
        window.removeEventListener('scroll', cdTop)
      }
    })
  }
  return (
    <>
      <Header />
      <section className={classes.container}>
        <Sidebar />
        <main
          className={`${className || ''} ${classes.main}`.trimLeft()}
          style={style}
        >
          {children}
        </main>
        <ToTop hide={hideToTop} />
      </section>
      <Footer />
    </>
  )
}
