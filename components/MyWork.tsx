import React from 'react'
import AnimationBox from './AnimationBox'

const MyWork = () => (
  <div id="myWork" className="my-10">
    <h3 className="text-4xl font-black text-center title">MY WORK</h3>
    <div className="flex flex-wrap w-full m-auto md:w-11/12 lg:w-11/12">
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://opensea.io/collection/taishi-face-transition-in-southeast-asia"
          image="/img/works/nft-selfie.png"
          webpImage="/img/works/nft-selfie.webp"
          name="My selfie NFT collection"
        />
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://www.producthunt.com/posts/askmakers-2-0"
          image="/img/works/askmakers2.gif"
          webpImage="/img/works/askmakers2.webp"
          name="AskMakers 2.0"
        />
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://www.npmjs.com/package/@taishikato/slug-generator"
          image="/img/works/@taishikato-slug-generator.png"
          webpImage="/img/works/@taishikato-slug-generator.webp"
          name="@taishikato/slug-generator"
        />
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/AskMakers/blob/master/README.md"
          image="/img/works/askmakers.gif"
          webpImage="/img/works/askmakers.webp"
          name="AskMakers"
        />
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/360gram/blob/master/README.md"
          image="/img/works/360gram.png"
          webpImage="/img/works/360gram.webp"
          name="360gram"
        />
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/PinWeb-API/blob/master/README.md"
          image="/img/works/pinweb.png"
          webpImage="/img/works/pinweb.webp"
          name="PinWeb"
        />
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
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
      </div>
      <div className="flex justify-center w-full py-2 md:w-4/12 lg:w-4/12">
        <AnimationBox
          url="https://github.com/taishikato/NomadPlaceMap/blob/master/README.md"
          image="/img/works/nomadplacemap.png"
          name="NomadPlaceMap"
          webpImage="/img/works/nomadplacemap.webp"
        />
      </div>
    </div>
  </div>
)

export default MyWork
