import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import '../assets/css/tailwind.css'
import '../assets/css/main.css'
import {MantineProvider} from '@mantine/core'
import {GoogleAnalytics} from 'nextjs-google-analytics'

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    const title = 'Taishi Kato'
    const url = 'https://taishikato.com/'
    const description = 'Software Developer and Traveler based in Vancouver'

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link key="canonical" rel="canonical" href={url} />
          <meta key="description" name="description" content={description} />
          <meta key="og:description" property="og:description" content={description} />
          <meta
            key="keywords"
            name="keywords"
            content="developer,web,javascript,react,Next.js,vue.js,nuxt.js,traveler,travel,adventure,portfolio"
          />
          <meta key="og:type" property="og:type" content="website" />
          <meta key="og:title" property="og:title" content={title} />
          <meta key="og:site_name" property="og:site_name" content={title} />
          <meta key="og:url" property="og:url" content={url} />
          <meta
            key="og:image"
            property="og:image"
            content="https://res.cloudinary.com/the360gram/image/upload/v1533914896/Federation_Square_Melbourne_Victoria_Australia_c2xmej.jpg"
          />
          <meta key="twitter:site" property="twitter:site" content="@taishik_" />
          <meta key="twitter:card" property="twitter:card" content="summary_large_image" />
        </Head>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
          }}>
          <Layout>
            <Component {...pageProps} />
            <GoogleAnalytics gaMeasurementId="UA-27648393-1" />
          </Layout>
        </MantineProvider>
      </>
    )
  }
}

export default MyApp
