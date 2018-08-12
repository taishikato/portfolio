<template>
  <section id="index">
    <div>
      <section class="hero is-large" style="background-color: gray;">
        <div class="hero-body">
          <div class="container">
            <h2 class="subtitle title-color">
              TAISHI KATO
            </h2>
            <h1 class="title is-1 title-color">
              DEVELOPER
              TRAVELER
            </h1>
            <hr>
          </div>
          <div class="container">
            <a href="https://www.linkedin.com/in/takato0903/" target="_blank"><i class="fab fa-linkedin fa-3x fa-fw linkedin-color"></i></a>
            <a href="https://medium.com/@taishi.k" target="_blank"><i class="fab fa-medium fa-3x fa-fw medium-color"></i></a>
            <a href="https://github.com/taishikato" target="_blank"><i class="fab fa-github fa-3x fa-fw github-color"></i></a>
            <a href="https://twitter.com/tsh_kt" target="_blank"><i class="fab fa-twitter fa-3x fa-fw twitter-color"></i></a>
            <a href="https://www.instagram.com/tsh_kt/" target="_blank"><i class="fab fa-instagram fa-3x fa-fw instagram-color"></i></a>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <h3 class="title is-3" style="text-align: center;">ABOUT ME</h3>
          <div class="columns">
            <div class="column is-4">
              <img src="/img/profile.jpg" />
            </div>
            <div class="column">
              text
            </div>
          </div>
        </div>
      </section>
      <a class="button">Anchor</a>
      <h1 class="title">
        portfolio
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  background-image: url('https://res.cloudinary.com/guidesquare/image/upload/e_brightness:-20/v1533914896/Federation_Square_Melbourne_Victoria_Australia_c2xmej.jpg');
  background-size: cover;
}
.hero h1 {
  font-weight: 900;
  font-size: 6rem;
  font-family: 'Titillium Web', sans-serif;
}
#index {
  margin-top: -52px;
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
</style>

