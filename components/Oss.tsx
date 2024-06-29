import React from 'react'

const Oss = () => {
  return (
    // <div className="py-3 bg-black text-gray-50">
    <div id="oss" className="max-w-5xl m-auto my-24">
      <h3 className="text-4xl font-black text-center title">OSS Contributions</h3>
      <ul className="mt-3">
        <li className="mb-1 font-bold list-disc">
          <a href="https://github.com/modal-labs/modal-examples/pull/340" target="_blank">
            Update function call: `_call_graph` -{'>'} `call_graph` by taishikato · Pull Request #340 ·
            modal-labs/modal-examples
          </a>
        </li>
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
    // </div>
  )
}

export default Oss
