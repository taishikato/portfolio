import React from 'react'
import Link from 'next/link'
import Mailchimp from './Mailchimp'
import Socials from './Socials'

const TopMain = () => {
  return (
    <section className="text-center bg-blue-900 text-white py-8">
      <div className="w-11/12 m-auto">
        <div>
          <a href="https://twitter.com/ProductHance" target="_blank">
            <picture>
              <source srcSet="/img/profile.webp" type="image/webp" />
              <source srcSet="/img/profile.jpg" type="image/jpeg" />
              <img
                src="/img/profile.jpg"
                loading="lazy"
                width="300"
                className="rounded-full m-auto"
                alt="Profile Image"
              />
            </picture>
          </a>
        </div>
        <div className="mt-3 text-xl">
          <p>
            ✋ What's up! I am Taishi
            <br />
            🥑 I love creating applications
            <br />
            🇾 I used to work for Yahoo! Japan as a Serverside (with Node.js TypeScript and PHP) Engineer for 4 years
            <br />
          </p>
          <p>⚡️My goal: I will release apps and earn $3,000 / month</p>
          <p>
            I quit my job, moved to 🍁Vancouver,
            <br />
            doing indie hacking and also looking for next full-time adventure (job) 😺
          </p>
          <p>
            My{' '}
            <Link href="/about">
              <a>Bio 😊</a>
            </Link>
          </p>
        </div>
        <div className="mt-2 flex flex-wrap justify-center">
          <Socials />
        </div>
        <Mailchimp />
      </div>
    </section>
  )
}

export default TopMain
