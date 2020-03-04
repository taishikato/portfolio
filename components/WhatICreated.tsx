import React from 'react'

const WhatICreated = () => (
  <div className="content-box">
    <h2 className="title text-3xl font-extrabold">🛠 What I've created</h2>
    3️⃣{' '}
    <a href="https://nomadplacemap.com/?ref=taishikato" target="_blank">
      <strong>NomadPlaceMap</strong>
    </a>
    <ul className="">
      <li>- Crowdsourced map for digital nomads to find a good place to work in the city by digital nomads</li>
      <li>- 🛠 Stack: Nuxt.js, Firebase, Mapbox, Crisp, Bulma</li>
    </ul>
    2️⃣{' '}
    <a href="https://taishikato.github.io/wp-fb-like-ranking/?ref=taishikato" target="_blank">
      <strong>WordPress Facebook Like Ranking</strong>
    </a>
    <ul className="">
      <li>- WordPress Plugin to show a ranking sorted by Facebook like count</li>
      <li>- 🛠 Stack: PHP, WordPress</li>
    </ul>
    1️⃣{' '}
    <a href="https://spalist.site/?ref=taishikato" target="_blank">
      <strong>SPA LIST</strong>
    </a>
    <ul className="">
      <li>- 🛠 Stack: Nuxt.js, Firebase Hosting, Firebase Storage, Buefy, Gumroad, Crisp</li>
    </ul>
    <style jsx>{`
      .content-box ul {
        padding: 10px 0 20px 30px;
      }
    `}</style>
  </div>
)

export default WhatICreated
