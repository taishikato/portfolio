import React from 'react'
import Footer from './Footer'
import useScript from '../plugins/useScript'
import {inter} from '../libs/fonts'

const Layout = props => {
  useScript('/js/makerWidget.js')

  return (
    <div className={inter.className}>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
