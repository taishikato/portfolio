import React from 'react'
import Link from 'next/link'
import Mailchimp from './Mailchimp'

const TopMain = () => {
  return (
    <section className="text-center bg-black text-white py-8">
      <div className="w-11/12 m-auto">
        <div>
          <a href="https://twitter.com/taishikat0" target="_blank">
            <img src="/img/profile.jpg" alt="Profile Image" width="300px" className="rounded-full m-auto" />
          </a>
        </div>
        <div className="mt-3 text-xl">
          <p>
            ✋ What's up! I am Taishi
            <br />
            🥑 I love creating my own apps
            <br />
            🇾 I used to work for Yahoo! Japan as a Backend Engineer
            <br />
          </p>
          <p>⚡️My goal: I will release apps and earn $3,000 / month</p>
          <p>I quit my job, moved to 🍁Vancouver and now it's time to be an indie maker 😺</p>
          <p>
            My{' '}
            <Link href="/about">
              <a>Bio 😊</a>
            </Link>
          </p>
        </div>
        <Mailchimp />
      </div>
    </section>
  )
}

export default TopMain