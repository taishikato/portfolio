import React from 'react'
import Footer from './Footer'
import useScript from '../plugins/useScript'

const Layout = props => {
  useScript('/js/makerWidget.js')
  useScript('/js/myTimezone.js')
  return (
    <div className="bg-black text-slate-200">
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
