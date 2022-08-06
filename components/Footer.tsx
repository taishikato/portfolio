import React from 'react'
import NewsLetter from './NewsLetter'
import Socials from './Socials'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="px-3 py-20 text-center bg-gray-100">
      <NewsLetter />
      <p className="mt-4">
        🙏Much appreciated if you send me $2 on{' '}
        <a href="https://www.paypal.me/taishikato0903/2usd" target="_blank">
          PayPal
        </a>{' '}
        so I can drink a cup of coffee☕ and create amazingness
        <br />
        Follow me on{' '}
        <a href="https://twitter.com/taishik_" target="_blank">
          Twitter🐦
        </a>
      </p>
      <p>
        This challenge is inspired by{' '}
        <a href="https://www.andreyazimov.com/" target="_blank">
          Andrey Azimov
        </a>
      </p>
      <Link href="/">
        <a>taishikato.com</a>
      </Link>
      <div className="flex flex-wrap justify-center mt-2 gap-y-3">
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
