import React from 'react'
import Hero from '../components/Hero'
import TopMain from '../components/TopMain'
import Skill from '../components/Skill'
import Oss from '../components/Oss'
import MyWork from '../components/MyWork'
import Blog from '../components/Blog'

const Home = ({posts}) => (
  <div>
    <Hero />
    <TopMain />
    <Skill />
    <Oss />
    <MyWork />
    <Blog posts={posts} />
  </div>
)

export async function getStaticProps() {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@TaishiKato')
  const posts = await res.json()

  return {
    props: {
      posts: posts.items,
    }, // will be passed to the page component as props
  }
}

export default Home
