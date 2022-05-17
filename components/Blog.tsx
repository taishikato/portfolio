import React, {FC} from 'react'

interface IPost {
  categories: string[]
  link: string
  pubDate: string
  thumbnail: string
  title: string
  guid: string
}

interface IProps {
  posts: IPost[]
}

const Blog: FC<IProps> = ({posts}) => (
  <div id="blog" className="w-11/12 pb-10 m-auto">
    <h3 className="text-4xl font-black text-center title">BLOG</h3>
    <div className="text-lg font-semibold text-center">My last 10 posts</div>
    <section className="text-gray-700">
      <div className="container p-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map(post => (
            <div key={post.guid} className="w-full p-4 lg:w-1/4 md:w-1/2">
              <a className="block h-48 overflow-hidden rounded hover:opacity-75" href={post.link} target="_blank">
                <img
                  alt={post.title}
                  className="block object-cover object-center w-full h-full"
                  src={post.thumbnail}
                  loading="lazy"
                />
              </a>
              <div className="mt-4">
                <div className="mb-1 text-xs tracking-widest text-gray-500">
                  {post.categories.join(', ').toUpperCase()}
                </div>
                <div className="text-lg font-medium">
                  <a className="text-gray-900" href={post.link} target="_blank">
                    {post.title}
                  </a>
                </div>
                <p className="mt-1">{post.pubDate.split(' ')[0]}</p>
              </div>
            </div>
          ))}
          <div className="w-full p-4 lg:w-1/4 md:w-1/2">
            <a
              className="block h-48 overflow-hidden rounded hover:opacity-75"
              href="https://medium.com/@TaishiKato"
              target="_blank">
              <picture>
                <source srcSet="/img/moreposts.webp" type="image/webp" />
                <source srcSet="/img/moreposts.png" type="image/jpeg" />
                <img
                  alt="More posts on Medium"
                  className="block object-cover object-center w-full h-full"
                  loading="lazy"
                  src="/img/moreposts.png"
                />
              </picture>
            </a>
            <div className="mt-4">
              <div className="text-lg font-medium">
                <a className="text-gray-900" href="https://medium.com/@TaishiKato" target="_blank">
                  Check out more posts on Medium…!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Blog
