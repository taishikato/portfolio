import React from 'react'
import AnimationBox from './AnimationBox'
import MyWorkSingle from './MyWorkSingle'

const works = [
  {
    id: 9,
    name: 'Gated DM - An Enhanced Twitter DM',
    description:
      'A web app that influencers can decide who can send DMs to them based on the number of followers or other criteria on Twitter.',
    link: 'https://www.gatedm.com/',
    tags: [{title: 'zombie', color: 'pink'}],
  },
  {
    id: 8,
    name: 'My selfie NFT collection',
    description: 'An experimental NFT collection.',
    link: 'https://opensea.io/collection/taishi-face-transition-in-southeast-asia',
    tags: [
      {title: 'alive', color: 'lime'},
      {title: 'fun', color: 'yellow'},
    ],
  },
  {
    id: 7,
    name: '@taishikato/slug-generator',
    description: 'A npm library to generate slug.',
    link: 'https://www.npmjs.com/package/@taishikato/slug-generator',
    tags: [{title: 'alive', color: 'lime'}],
  },
  {
    id: 6,
    name: 'AskMakers',
    description: 'A community for indie hackers to ask the questions.',
    link: 'https://www.producthunt.com/products/askmakers#askmakers-2-0',
    tags: [
      {title: 'dead', color: 'red'},
      {title: 'most thrived and fun', color: 'green'},
      {title: 'More than 100 people joined', color: 'yellow'},
    ],
  },
  {
    id: 5,
    name: '360gram',
    description: 'Instagram but sharing 360 pictures.',
    link: 'https://github.com/taishikato/360gram/blob/master/README.md',
    tags: [
      {title: 'zombie', color: 'pink'},
      {title: 'still fun', color: 'cyan'},
    ],
  },
  {
    id: 4,
    name: 'PinWeb',
    description: 'A chrome extension to save a screenshot on Pinterest.',
    link: 'https://github.com/taishikato/PinWeb-API/blob/master/README.md',
    tags: [{title: 'zombie', color: 'pink'}],
  },
  {
    id: 3,
    name: 'NomadPlaceMap',
    description: 'A web app to show the cafes in your town for study/work.',
    link: 'https://github.com/taishikato/NomadPlaceMap/blob/master/README.md',
    tags: [{title: 'dead', color: 'red'}],
  },
  {
    id: 2,
    name: 'WordPress Facebook Like Ranking',
    description: 'A WordPress plugin to show the number of Facebook like of the articles',
    link: 'https://wordpress.org/plugins/wp-facebook-like-ranking/',
    tags: [{title: 'zombie', color: 'pink'}],
  },
  {
    id: 1,
    name: 'Air Note',
    description: 'A dead simple note app',
    link: 'https://airnote.space/',
    tags: [{title: 'dead', color: 'red'}],
  },
]

const MyWork = () => (
  <div id="myWork" className="px-3 pb-10 my-10 bg-black text-slate-50">
    <h3 className="py-5 text-4xl font-black text-center title">MY PROJECTS</h3>

    <div className="flex flex-col w-full m-auto md:w-10/12 lg:w-10/12 gap-y-5">
      {works.map(work => {
        return <MyWorkSingle key={work.id} work={work} />
      })}
    </div>

    {/* <div className="flex flex-wrap w-full m-auto md:w-11/12 lg:w-11/12"> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://opensea.io/collection/taishi-face-transition-in-southeast-asia"
          image="/img/works/nft-selfie.png"
          webpImage="/img/works/nft-selfie.webp"
          name="My selfie NFT collection"
        />
      </div> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://www.producthunt.com/posts/askmakers-2-0"
          image="/img/works/askmakers2.gif"
          webpImage="/img/works/askmakers2.webp"
          name="AskMakers 2.0"
        />
      </div> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://www.npmjs.com/package/@taishikato/slug-generator"
          image="/img/works/@taishikato-slug-generator.png"
          webpImage="/img/works/@taishikato-slug-generator.webp"
          name="@taishikato/slug-generator"
        />
      </div> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/AskMakers/blob/master/README.md"
          image="/img/works/askmakers.gif"
          webpImage="/img/works/askmakers.webp"
          name="AskMakers"
        />
      </div> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/360gram/blob/master/README.md"
          image="/img/works/360gram.png"
          webpImage="/img/works/360gram.webp"
          name="360gram"
        />
      </div> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/PinWeb-API/blob/master/README.md"
          image="/img/works/pinweb.png"
          webpImage="/img/works/pinweb.webp"
          name="PinWeb"
        />
      </div> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://airnote.space/"
          image="/img/works/airnote.png"
          name="airnote"
          webpImage="/img/works/airnote.webp"
        />
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://wordpress.org/plugins/wp-facebook-like-ranking/"
          image="/img/works/wflr.png"
          name="WordPress Facebook Like Ranking"
          webpImage="/img/works/wflr.webp"
        />
      </div> */}
    {/* <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/NomadPlaceMap/blob/master/README.md"
          image="/img/works/nomadplacemap.png"
          name="NomadPlaceMap"
          webpImage="/img/works/nomadplacemap.webp"
        />
      </div> */}
    {/* </div> */}
  </div>
)

export default MyWork
