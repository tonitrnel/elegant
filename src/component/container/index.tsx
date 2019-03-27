import * as React from 'react'
import classes from './index.styl'
import Header from '@/component/header'
import Sidebar from '@/component/sidebar'
import Footer from '@/component/footer'

interface ComponentProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export default function Container({ children, className, style }: ComponentProps) {
  return (
    <>
      <Header/>
      <section className={classes.container}>
        <Sidebar/>
        <main className={`${className || ''} ${classes.main}`.trimLeft()} style={style} >
          {children}
        </main>
      </section>
      <Footer/>
    </>
  )
}
