import React from 'react'
import Head from 'next/head'
import Socials from '../components/Socials'
import BioBottom from '../components/BioBottom'

const About = () => {
  const url = 'https://taishikato.com/about'
  return (
    <>
      <Head>
        <meta key="og:url" property="og:url" content={url} />
        <link key="canonical" rel="canonical" href={url} />
      </Head>
      <div className="pt-3 pb-20 bg-slate-50">
        <h1 className="text-4xl font-black text-center title">About Taishi Kato</h1>
        <div className="flex flex-wrap items-center w-11/12 m-auto mt-16 mb-10 md:w-8/12 lg:w-8/12">
          <div className="w-full mb-2 md:w-4/12 lg:w-4/12 md:mb-0 lg:mb-0">
            <img src="/img/profile.jpg" className="m-auto rounded-full md:m-0 lg:m-0" width="250px" />
          </div>
          <div className="w-full md:w-8/12 lg:w-8/12">
            <p>👋 Hi, I am Taishi, an Indie Maker & currently living in Vancouver 🍁</p>
            <p>I quit my job and moved to Vancouver to find a new Life 😙</p>
            <p>
              I made{' '}
              <a
                className="text-gray-800 underline"
                href="https://github.com/taishikato/AskMakers/blob/master/README.md"
                target="_blank">
                AskMakers
              </a>
              ,{' '}
              <a
                className="text-gray-800 underline"
                href="https://www.npmjs.com/package/@taishikato/slug-generator"
                target="_blank">
                @taishikato/slug-generator
              </a>
              ,{' '}
              <a
                className="text-gray-800 underline"
                href="https://github.com/taishikato/360gram/blob/master/README.md"
                target="_blank">
                360gram
              </a>
              ,{' '}
              <a
                className="text-gray-800 underline"
                href="https://en-ca.wordpress.org/plugins/wp-facebook-like-ranking/"
                target="_blank">
                WordPress Facebook Like Ranking
              </a>
            </p>
            <div className="flex flex-wrap mt-2">
              <Socials />
            </div>
          </div>
        </div>
        <div className="w-11/12 pt-5 m-auto border-t border-gray-400 md:w-8/12 lg:w-8/12">
          <BioBottom />
        </div>
      </div>
    </>
  )
}

export default About
