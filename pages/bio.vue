<template>
  <div id="bio">
    <section class="hero bg-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            About Taishi Kato
          </h1>
        </div>
      </div>
    </section>
    <section class="section bg-dark">
      <div class="columns">
        <div class="column container is-9">
          <div class="columns flex-center">
            <div class="column is-4">
              <a href="https://twitter.com/taishikat0" target="_blank">
                <img src="/img/profile.jpg" alt="Profile Image" width="250px" class="round-image"/>
              </a>
            </div>
            <div class="column content">
              <p>
                👋 Hi, I am Taishi, an Indie Maker & currently living in Vancouver 🍁
              </p>
              <p>
                I quit my job and moved to Vancouver to find a new Life 😙
              </p>
              <p>
                I made <a href="https://spalist.site/?ref=taishikato" target="_blank">SPA LIST</a>
              </p>
              <p>
                <div class="container">
                  <a href="https://www.linkedin.com/in/takato0903/" target="_blank"><i class="fab fa-linkedin fa-3x fa-fw linkedin-color"></i></a>
                  <a href="https://medium.com/@TaishiKato" target="_blank"><i class="fab fa-medium fa-3x fa-fw medium-color"></i></a>
                  <a href="https://github.com/taishikato" target="_blank"><i class="fab fa-github fa-3x fa-fw github-color"></i></a>
                  <a href="https://twitter.com/taishikat0" target="_blank"><i class="fab fa-twitter fa-3x fa-fw twitter-color"></i></a>
                  <a href="https://www.instagram.com/tsh_kt/" target="_blank"><i class="fab fa-instagram fa-3x fa-fw instagram-color"></i></a>
                </div>
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column content-box">
              <h2 class="title is-4">🛠 What I've created</h2>
              1️⃣ <a href="https://spalist.site/?ref=taishikato" target="_blank"><strong>SPA LIST</strong></a>
              <ul>
                <li>- 🛠 Stack: Nuxt.js, Firebase Hosting, Firebase Storage, Buefy, Gumroad, Crisp</li>
              </ul>
            </div>
          </div>
          <div class="columns">
            <div class="column content-box">
              <p class="paddingTop">🎶 <strong>HIP HOP, Dubstep, Future Bass</strong></p>
              <ul>
                <li>I make Bass Music on my Ableton Live 9. Listen on <a href="https://soundcloud.com/taishikato" target="_blank">SoundCloud</a></li>
              </ul>
              <p class="paddingTop">✈️ <strong>Travel</strong></p>
              <ul>
                <li>USA, Canada, Cuba, Thailand, Vietnam, Cambodia, Laos, Philippines, Myanmar, Sli Lanka, Singapore, Malaysia, Indonesia, Korea, Australia</li>
              </ul>
              <p class="paddingTop">💼 <strong>Worked Before</strong></p>
              <ul>
                <li>Yahoo! JAPAN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    twemoji.parse(document.body);
  }
}
</script>

<style scoped lang="scss">
.content-box {
  margin: 20px 0;
  padding: 20px 0;
  border-top: 1px solid #fff;
  ul {
    padding: 10px 0 0 30px;
  }
}
.paddingTop {
  padding-top: 30px;
}
</style>
