<template>
    <div id="index">
      <section class="hero is-large">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-1 title-color">
              <svg viewbox="0 0 100 20">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stop-color="#ffffff"/>
                    <stop offset="95%" stop-color="#f1eaea"/>
                  </linearGradient>
                  <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                    <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                      <animateTransform
                          attributeName="transform"
                          begin="0s"
                          dur="1.5s"
                          type="translate"
                          from="0,0"
                          to="40,0"
                          repeatCount="indefinite" />
                    </path>
                  </pattern>
                </defs>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">Hyper</text>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.5">Hyper</text>
              </svg>

              <svg viewbox="0 0 100 20">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stop-color="#ffffff"/>
                    <stop offset="95%" stop-color="#f1eaea"/>
                  </linearGradient>
                  <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                    <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                      <animateTransform
                          attributeName="transform"
                          begin="0s"
                          dur="1.5s"
                          type="translate"
                          from="0,0"
                          to="40,0"
                          repeatCount="indefinite" />
                    </path>
                  </pattern>
                </defs>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">Hardcore</text>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.5">Hardcore</text>
              </svg>

              <svg viewbox="0 0 100 20">
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stop-color="#ffffff"/>
                    <stop offset="95%" stop-color="#f1eaea"/>
                  </linearGradient>
                  <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
                    <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                      <animateTransform
                          attributeName="transform"
                          begin="0s"
                          dur="1.5s"
                          type="translate"
                          from="0,0"
                          to="40,0"
                          repeatCount="indefinite" />
                    </path>
                  </pattern>
                </defs>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">Year</text>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.5">Year</text>
              </svg>

            </h1>
          </div>
        </div>
      </section>
      <section class="section bg-dark">
        <div class="container">
          <div class="columns">
            <div class="column has-text-centered">
              <a href="https://twitter.com/taishikat0" target="_blank">
                <img src="/img/profile.jpg" alt="Profile Image" width="300px" class="round-image"/>
              </a>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <div class="content">
                <p class="big-text">
                  ✋ What's up! I am Taishi<br>
                  🥑 I love creating my own apps<br>
                  🇾 I used to work for Yahoo! Japan as a Backend Engineer<br>
                </p>
                <p class="big-text">
                  ⚡️My goal: I will release apps and earn $3,000 / month
                </p>
                <p class="big-text">
                  I quit my job, moved to 🍁Vancouver and now it's time to be an indie maker 😺
                </p>
                <p class="big-text">My <n-link to="/bio">Bio 😊</n-link></p>
              </div>
              <!-- <h4 class="title is-4">Skills</h4>
              <div class="colums">
                <div class="column">
                  Vue.js (Nuxt.js)
                  <progress class="progress is-primary is-small" value="80" max="100">80%</progress>
                </div>
                <div class="column">
                  Javascript (Node.js)
                  <progress class="progress is-primary is-small" value="90" max="100">90%</progress>
                </div>
                <div class="column">
                  Firebase
                  <progress class="progress is-danger is-small" value="80" max="100">80%</progress>
                </div>
                <div class="column">
                  PHP
                  <progress class="progress is-small" value="90" max="100">90%</progress>
                </div>
                <div class="column">
                  HTML5
                  <progress class="progress is-info is-small" value="90" max="100">90%</progress>
                </div>
                <div class="column">
                  CSS3
                  <progress class="progress is-warning is-small" value="80" max="100">80%</progress>
                </div>
              </div> -->

              <!-- Begin Mailchimp Signup Form -->
              <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
              <style type="text/css">
                #mc_embed_signup{background:#131d27; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
                /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
                  We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
              </style>
              <div id="mc_embed_signup">
              <form action="https://gmail.us20.list-manage.com/subscribe/post?u=0fe0b2aeb98a80bacf4afde06&amp;id=34d283ad51" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                <label for="mce-EMAIL">😙 Wanna know if I achieve my goal?</label>
                <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="example@example.com" required>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0fe0b2aeb98a80bacf4afde06_34d283ad51" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                  </div>
              </form>
              </div>
              <!--End mc_embed_signup-->

            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <h3 class="title is-3" style="text-align: center;">MY WORK</h3>
            <div id="portfolio-list" class="columns is-multiline">
              <div v-for="post in posts" :key="post.sys.id" class="column is-4 portfolio-wrap">
                <nuxt-link :to="`/portfolio/${post.fields.slug}`">
                  <img :src="post.fields.thumbnail.fields.file.url" :alt="post.fields.heroImage.fields.description" width="320"/>
                  <span class="title is-3 portfolio-title">{{ post.fields.title }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';
const client = createClient();

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error);
  },
  mounted() {
    twemoji.parse(document.body);
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  background-image: url('https://res.cloudinary.com/guidesquare/image/upload/e_brightness:-20/v1533914896/Federation_Square_Melbourne_Victoria_Australia_c2xmej.jpg');
  background-size: cover;
  background-position: center;
}
.hero h1 {
  font-weight: 900;
  font-size: 6rem;
  font-family: 'Titillium Web', sans-serif;
}
.hero h1 svg text {
  font-weight: 900;
  font-size: 17px;
  font-family: 'Titillium Web', sans-serif;
}
#index {
  margin-top: -52px;
}
h3.title {
  letter-spacing: 0.2rem;
}

.portfolio-wrap a {
  position: relative;
  display: inline-block;
  /* padding: .9em 3.6em; */
  border: 2px solid #fff;
  color: black;
  text-align: center;
  text-decoration: none;
  outline: none;
  transition: all .3s;
}
.portfolio-wrap a::before,
.portfolio-wrap a::after {
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: 2;
  content: '';
  transition: all .3s;
}
.portfolio-wrap a::before {
  border-top: 10px solid #3be5ae;
  border-bottom: 10px solid #3be5ae;
  transform: scale(0, 1);
}
.portfolio-wrap a::after {
  border-right: 10px solid #3be5ae;
  border-left: 10px solid #3be5ae;
  transform: scale(1, 0);
}
.portfolio-wrap a:hover {
  color: #3be5ae;
}
.portfolio-wrap a:hover::after,
.portfolio-wrap a:hover::before {
  transform: scale(1);
}

.portfolio-wrap a:hover img {
  opacity: 0.2;
  filter: alpha(opacity=20);
  -ms-filter: "alpha(opacity=20)";
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.portfolio-title {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  display: none;
  color: #47cea2;
}
.portfolio-wrap a:hover .portfolio-title {
  display: inline;
}

body {
  font-family: 'Cabin Condensed', sans-serif;
}
svg{font-weight:bold;max-width:600px;height:auto;color: white;}

#mc_embed_signup label {
  font-size: 30px;
}
</style>

