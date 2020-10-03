import React, {FC} from 'react'

interface IPost {
  categories: string[]
  link: string
  pubDate: string
  thumbnail: string
  title: string
}

interface IProps {
  posts: IPost[]
}

const Blog: FC<IProps> = ({posts}) => (
  <div id="blog" className="mb-10 w-11/12 m-auto">
    <h3 className="text-4xl text-center title font-black">BLOG</h3>
    <div className="text-center text-lg font-semibold">My last 10 posts</div>
    <section className="text-gray-700">
      <div className="container p-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map(post => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden hover:opacity-75" href={post.link} target="_blank">
                <img
                  alt={post.title}
                  className="object-cover object-center w-full h-full block"
                  src={post.thumbnail}
                  loading="lazy"
                />
              </a>
              <div className="mt-4">
                <div className="text-gray-500 text-xs tracking-widest mb-1">
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
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a
              className="block h-48 rounded overflow-hidden hover:opacity-75"
              href="https://medium.com/@TaishiKato"
              target="_blank">
              <picture>
                <source srcSet="/img/moreposts.webp" type="image/webp" />
                <source srcSet="/img/moreposts.png" type="image/jpeg" />
                <img
                  alt="More posts on Medium"
                  className="object-cover object-center w-full h-full block"
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
