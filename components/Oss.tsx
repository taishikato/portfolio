import React from 'react'

const Oss = () => {
  return (
    <div id="oss" className="w-10/12 m-auto my-10">
      <h3 className="text-4xl font-black text-center title">OSS Contributions</h3>
      <ul className="mt-3 text-center">
        <li className="mb-1 font-bold">
          <a href="https://github.com/nuxt/docs/pull/1799" target="_blank">
            ja: document delete heroku-postbuild section by taishikato · Pull Request #1799 · nuxt/docs
          </a>
        </li>
        <li className="mb-1 font-bold">
          <a href="https://github.com/nuxt/docs/pull/1797" target="_blank">
            en: document delete heroku-deployment section by taishikato · Pull Request #1797 · nuxt/docs
          </a>
        </li>
        <li className="mb-1 font-bold">
          <a href="https://github.com/nodejs/node/pull/24589" target="_blank">
            lib: changed anonymous function to arrow function by taishikato · Pull Request #24589 · nodejs/node
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Oss
