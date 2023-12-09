import Head from 'next/head'
import {useRouter} from 'next/router'

const ARTICLES = {
  'weekly-update-3-and-hot-spring-trip': {
    title: 'Weekly update #3 and hot spring trip ♨️',
    url: 'https://dub.sh/weekly-update-3-and-hot-spring-trip',
  },
  'weekly-update-6-being-a-nomad-in-chiang-mai': {
    title: 'Weekly update #6 - Being a nomad in Chiang Mai',
    url: 'https://dub.sh/weekly-update-6-being-a-nomad-in-chiang-mai',
  },
  'weekly-update-9-new-feature-dropped': {
    title: "Weekly update #9 - a new feature's dropped. uncertainty",
    url: 'https://dub.sh/weekly-update-9-new-feature-dropped',
  },
}

const News = ({postData}) => {
  const router = useRouter()
  const {slug} = router.query

  return (
    <>
      <Head>
        <title>{`${postData.title} - Taishi`}</title>
        <meta name="description" key="description" content={postData.title} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" key="og:description" content={postData.title} />
        <meta property="og:url" key="og:url" content={`https://taishikato.com/news/${slug}`} />
      </Head>
      <div className="bg-slate-50 h-[calc(100vh-422px)]">
        <div className="p-8">
          <h1 className="flex items-center space-x-3">
            <a href={postData.url}>{postData.title}</a>
            <a href={postData.url}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" />
              </svg>
            </a>
          </h1>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({params}) {
  const postData = ARTICLES[params.slug]

  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(ARTICLES).map(slug => {
      return {
        params: {slug},
      }
    }),
    fallback: false,
  }
}

export default News
