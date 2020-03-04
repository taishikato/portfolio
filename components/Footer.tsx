import React from 'react'
import Mailchimp from './Mailchimp'
import Socials from './Socials'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-center bg-gray-100 py-20">
      <Mailchimp />
      <p>
        🙏Much appreciated if you send me $2 on{' '}
        <a href="https://www.paypal.me/taishikato0903/2usd" target="_blank">
          PayPal
        </a>{' '}
        so I can drink a cup of coffee☕ and create amazingness
        <br />
        Follow me on{' '}
        <a href="https://twitter.com/taishikat0" target="_blank">
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
      <div className="mt-2 flex flex-wrap justify-center">
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
