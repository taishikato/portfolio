import React from 'react'

const Oss = () => {
  return (
    <div id="oss" className="m-auto w-10/12 my-10">
      <h3 className="title font-black text-4xl text-center">OSS Contributes</h3>
      <ul className="mt-3">
        <li className="mb-1 font-bold list-disc">
          <a href="https://github.com/nuxt/docs/pull/1799" target="_blank">
            ja: document delete heroku-postbuild section by taishikato · Pull Request #1799 · nuxt/docs
          </a>
        </li>
        <li className="mb-1 font-bold list-disc">
          <a href="https://github.com/nuxt/docs/pull/1797" target="_blank">
            en: document delete heroku-deployment section by taishikato · Pull Request #1797 · nuxt/docs
          </a>
        </li>
        <li className="mb-1 font-bold list-disc">
          <a href="https://github.com/nodejs/node/pull/24589" target="_blank">
            lib: chenged anonymous function to arrow function by taishikato · Pull Request #24589 · nodejs/node
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Oss
