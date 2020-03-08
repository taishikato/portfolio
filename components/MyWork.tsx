import React from 'react'
import AnimationBox from './AnimationBox'

const MyWork = () => (
  <div id="myWork" className="my-10">
    <h3 className="title font-black text-4xl text-center">MY WORK</h3>
    <div className="flex flex-wrap m-auto w-full md:w-11/12 lg:w-11/12">
      <div className="w-full md:w-4/12 lg:w-4/12 flex justify-center py-2">
        <AnimationBox
          url="https://github.com/taishikato/AskMakers/blob/master/README.md"
          image="/img/works/askmakers.gif"
          name="AskMakers"
        />
      </div>
      <div className="w-full md:w-4/12 lg:w-4/12 flex justify-center py-2">
        <AnimationBox
          url="https://github.com/taishikato/360gram/blob/master/README.md"
          image="/img/works/360gram.png"
          name="360gram"
        />
      </div>
      <div className="w-full md:w-4/12 lg:w-4/12 flex justify-center py-2">
        <AnimationBox url="https://www.producthunt.com/posts/pinweb" image="/img/works/pinweb.png" name="PinWeb" />
      </div>
      <div className="w-full md:w-4/12 lg:w-4/12 flex justify-center py-2">
        <AnimationBox
          url="https://wordpress.org/plugins/wp-facebook-like-ranking/"
          image="/img/works/wflr.png"
          name="WordPress Facebook Like Ranking"
        />
      </div>
      <div className="w-full md:w-4/12 lg:w-4/12 flex justify-center py-2">
        <AnimationBox
          url="https://nomadplacemap.com/?ref=taishikato"
          image="/img/works/nomadplacemap.png"
          name="NomadPlaceMap"
        />
      </div>
    </div>
  </div>
)

export default MyWork
