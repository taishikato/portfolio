import React from 'react'
import NewsLetter from './NewsLetter'
import Socials from './Socials'
import Link from 'next/link'
import Marquee from './Marquee'

const Footer = () => {
  return (
    <footer className="px-3 pt-20 text-center border-t border-slate-700">
      <NewsLetter />
      <Marquee />
      <div className="bg-slate-200 py-14">
        <Socials />
        <div className="mt-6 font-light tracking-wide text-slate-800">
          ©
          <Link href="/">
            <a className="text-slate-800">taishikato.com</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
