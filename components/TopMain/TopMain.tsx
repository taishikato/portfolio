import React from 'react'
import Link from 'next/link'
import NewsLetter from '../NewsLetter'
import Socials from '../Socials'
import SmallTitle from '../SmallTitle'
import Code from './Code'
import WorkHistory from './WorkHistory'

const TopMain = () => {
  return (
    <section className="text-center text-white border-b pt-14 pb-14 border-slate-700">
      <div className="w-11/12 m-auto">
        <div className="flex flex-col items-center justify-center gap-x-14 md:flex-row gap-y-5 md:gap-y-0">
          <div>
            <a href="https://twitter.com/taishik_" target="_blank">
              <picture>
                <source srcSet="/img/profile.webp" type="image/webp" />
                <source srcSet="/img/profile.jpg" type="image/jpeg" />
                <img
                  src="/img/profile.jpg"
                  loading="lazy"
                  width="200"
                  height="200"
                  alt="Profile Image"
                  // className="m-auto rounded-full bg-gradient-to-r p-[6px] from-[#fe0000] via-[#3B82F6] to-[#9333EA]"
                  className="weird-object2 shadow-left"
                />
              </picture>
            </a>
          </div>
          <Code />
        </div>

        <WorkHistory />

        {/* <div>
          <a href="https://twitter.com/taishik_" target="_blank">
            <picture>
              <source srcSet="/img/profile.webp" type="image/webp" />
              <source srcSet="/img/profile.jpg" type="image/jpeg" />
              <img
                src="/img/profile.jpg"
                loading="lazy"
                width="200"
                height="200"
                alt="Profile Image"
                className="m-auto rounded-full bg-gradient-to-r p-[6px] from-[#fe0000] via-[#3B82F6] to-[#9333EA]"
              />
            </picture>
          </a>
        </div>
        <div className="mt-3 w-[400px] mx-auto">
          <SmallTitle>Hey! I am Taishi</SmallTitle>
          <ul className="tracking-wide text-center">
            <li className="flex items-center justify-center gap-x-3 text-md">
              <span>🇯🇵</span>From Japan
            </li>
            <li className="flex items-center justify-center gap-x-3 text-md">
              <span>🇨🇦</span>Live in Canada
            </li>
            <li className="flex items-center justify-center gap-x-3 text-md">
              <span>👨‍💻</span>Software Developer
            </li>
            <li className="flex items-center justify-center gap-x-3 text-md">
              <span>🔨</span>Part-time Indie Hacker
            </li>
          </ul>
        </div> */}
        {/* <p>
            My{' '}
            <Link href="/about">
              <a>Bio 😊</a>
            </Link>
          </p> */}
        <div className="mt-20">
          <div className="my-6">
            <SmallTitle>Socials</SmallTitle>
            <Socials />
          </div>
        </div>
        <div className="mt-20">
          <SmallTitle>News Letter</SmallTitle>
          <NewsLetter />
          {/* <NewsLetter2 /> */}
        </div>
      </div>
    </section>
  )
}

export default TopMain
