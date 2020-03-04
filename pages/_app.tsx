import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
// import 'modern-normalize'
import '../assets/css/tailwind.css'
import '../assets/css/main.css'

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Next.js TypeScript Quickstart</title>
          <link
            href="https://fonts.googleapis.com/css?family=Titillium+Web:400,900&display=swap"
            rel="stylesheet"></link>
          {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link> */}
          <link href="https://fonts.googleapis.com/css?family=Spartan:500,700,800&display=swap" rel="stylesheet"></link>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}
