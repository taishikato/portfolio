import React from 'react'
import Item from './Item'

const OSSList = [
  {
    link: 'https://github.com/nuxt/docs/pull/1797',
    imgName: 'nuxtjs-icon.svg',
    title: 'en: document delete heroku-deployment section by taishikato · Pull Request #1797 · nuxt/docs',
  },
  {
    link: 'https://github.com/nuxt/docs/pull/1799',
    imgName: 'nuxtjs-icon.svg',
    title: 'ja: document delete heroku-postbuild section by taishikato · Pull Request #1799 · nuxt/docs',
  },
  {
    link: 'https://github.com/nodejs/node/pull/24589',
    imgName: 'nodejs-icon.svg',
    title: 'lib: changed anonymous function to arrow function by taishikato · Pull Request #24589 · nodejs/node',
  },
]

const Oss = () => {
  return (
    <div id="oss" className="w-11/12 m-auto my-20">
      <h3 className="mb-6 text-4xl font-black">OSS Contributions</h3>
      <div className="flex flex-col mt-3 gap-y-5">
        {OSSList.map(item => (
          <Item {...item} key={item.link} />
        ))}
      </div>
    </div>
  )
}

export default Oss
