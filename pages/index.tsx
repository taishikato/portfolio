import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import TopMain from '../components/TopMain'
import MyWork from '../components/MyWork'
import Blog from '../components/Blog'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
    <TopMain />
    <MyWork />
    <Blog />
  </div>
)

export default Home
