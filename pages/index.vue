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
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">DEVELOPER</text>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.5">DEVELOPER</text>
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
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="1">TRAVELER</text>
                <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.5">TRAVELER</text>
              </svg>

            </h1>
            <h2 class="subtitle title-color">
              TAISHI KATO
            </h2>
            <hr>
          </div>
          <div class="container">
            <a href="https://www.linkedin.com/in/takato0903/" target="_blank"><i class="fab fa-linkedin fa-3x fa-fw linkedin-color"></i></a>
            <a href="https://medium.com/@TaishiKato" target="_blank"><i class="fab fa-medium fa-3x fa-fw medium-color"></i></a>
            <a href="https://github.com/taishikato" target="_blank"><i class="fab fa-github fa-3x fa-fw github-color"></i></a>
            <a href="https://twitter.com/taishikat0" target="_blank"><i class="fab fa-twitter fa-3x fa-fw twitter-color"></i></a>
            <a href="https://www.instagram.com/tsh_kt/" target="_blank"><i class="fab fa-instagram fa-3x fa-fw instagram-color"></i></a>
          </div>
        </div>
      </section>
      <section class="section bg-dark">
        <div class="container">
          <div class="columns">
            <div class="column has-text-centered">
              <img src="/img/profile.jpg" alt="Profile Image" width="300px" class="round-image"/>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered">
              <div class="content">
                <p class="big-text">
                  ✋ Hi! I am Taishi<br>
                  🥑 a lover of frontend modern technologies<br>
                  I used to work for Yahoo! Japan as a Backend Engineer<br>
                  and currently living in 🍁Vancouver
                </p>
                <p class="big-text">
                  I have been creating web apps as my own project because I just love creating something amazing.
                </p>
              </div>
              <h4 class="title is-4">Skills</h4>
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
              </div>
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
.title-color {
  color: white;
}
.twitter-color {
  color: #1ea1f2;
}
.github-color {
  color: #24292e;
}
.linkedin-color {
  color: #0077b5;
}
.instagram-color {
  color: #272727;
}
.medium-color {
  color: rgba(0,0,0,.84);
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
</style>

