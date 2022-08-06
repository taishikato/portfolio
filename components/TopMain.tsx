import React from 'react'
import Link from 'next/link'
import NewsLetter from './NewsLetter'
import Socials from './Socials'

const TopMain = () => {
  return (
    <section className="py-8 text-center text-white">
      <div className="w-11/12 m-auto">
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
                className="m-auto rounded-full bg-gradient-to-r p-[6px] from-[#fe0000] via-[#3B82F6] to-[#9333EA]"
              />
            </picture>
          </a>
        </div>
        <div className="flex flex-wrap justify-center my-6 gap-y-3">
          <Socials />
        </div>
        <div className="mt-3 w-[400px] mx-auto">
          <p className="text-2xl font-bold">✋ Hey! I am Taishi</p>
          <ul className="mt-2 tracking-wide text-center">
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
          <p>
            My{' '}
            <Link href="/about">
              <a>Bio 😊</a>
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <NewsLetter />
        </div>
      </div>
    </section>
  )
}

export default TopMain
