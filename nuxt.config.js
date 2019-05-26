const { getConfigForKeys } = require('./lib/config.js');
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
  'CTF_CMA_ACCESS_TOKEN',
  'CTF_PERSON_ID'
]);
const { createClient } = require('./plugins/contentful');
const cdaClient = createClient(ctfConfig);

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Taishi Kato',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Web Developer and Traveler in Tokyo'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'developer,web,javascript,vue.js,nuxt.js,traveler,travel,adventure,portfolio'
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Taishi Kato' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Web Developer and Traveler in Tokyo'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://res.cloudinary.com/guidesquare/image/upload/c_crop,h_630,w_1200/v1533914896/Federation_Square_Melbourne_Victoria_Australia_c2xmej.jpg'
      },
      { hid: 'og:url', name: 'og:url', content: 'https://taishikato.com/' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Taishi Kato' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: '@tsh_kt', name: '@tsh_kt', content: 'twitter:site' }
    ],
    script: [{ src: 'https://twemoji.maxcdn.com/2/twemoji.min.js?12.0.0' }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Titillium+Web:900'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  css: [
    '@/assets/css/bulma',
    '@/assets/css/main',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css'
  ],
  modules: [
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-27648393-1'
      }
    ],
    '@nuxtjs/sitemap'
  ],
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
     ** Run ESLint on save
     */
    extend(config) {
      if (process.server && process.browser) {
        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          });
        }
      }
    }
  },

  /*
   ** ᕕ( ᐛ )ᕗ
   ** Get all portfolio posts from Contentful
   ** and generate the needed files upfront
   **
   ** Included:
   ** - portfolio posts
   ** - available portfolio post tags
   */
  generate: {
    routes() {
      return Promise.all([
        // get all portfolio posts
        cdaClient.getEntries({
          content_type: ctfConfig.CTF_BLOG_POST_TYPE_ID
        })
        // get the portfolio post content type
        // cmaClient.getSpace(ctfConfig.CTF_SPACE_ID)
        //   .then(space => space.getContentType(ctfConfig.CTF_BLOG_POST_TYPE_ID))
      ]).then(([entries, postType]) => {
        return [
          // map entries to URLs
          ...entries.items.map(entry => `/portfolio/${entry.fields.slug}`)
          // map all possible tags to URLs
          // ...postType.fields.find(field => field.id === 'tags').items.validations[0].in.map(tag => `/tags/${tag}`)
        ];
      });
    }
  },

  /*
   ** Define environment variables being available
   ** in generate and browser context
   */
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: ctfConfig.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  }
};
