import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'
import '../css/tailwind.css'

import 'modern-normalize'

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Next.js TypeScript Quickstart</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
