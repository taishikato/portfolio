<template>
  <div class="portfolio-slug">
    <header class="article header">
      <div class="hero is-large">
        <img
          :src="`${post.fields.heroImage.fields.file.url}?fit=scale&w=350&h=196`"
          :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=87&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=250&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=500&fit=fill 2000w`"
          size="100vw"
          :alt="post.fields.heroImage.fields.description"
        >
      </div>
    </header>

    <section class="section">
      <div class="container">
        <section class="columns">
          <div class="column">
            <h2 class="title is-2">{{ post.fields.title }}</h2>
          </div>
        </section>
        <section class="columns">
          <div class="column tags">
            <h3 class="title is-3">Tags</h3>
            <span v-for="tag in post.fields.tags" :key="tag" class="tag is-primary is-rounded">
              {{ tag }}
            </span>
          </div>
          <div class="column">
            <h3 class="title is-3">Creation Date</h3>
            {{ ( new Date(post.fields.publishDate)).toDateString() }}
          </div>
        </section>
        <section>
          <div class="content">
            <div v-html="$md.render(post.fields.body)"></div>
          </div>
        </section>
      </div>
    </section>

  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient();

export default {
  head () {
    return {
      title: `${this.post.fields.title} - Taishi Kato`,
      meta: [
        { hid: 'description', name: 'description', content: this.post.fields.body.slice(0, 300) },
        { hid: 'og:title', name: 'og:title', content: `${this.post.fields.title} - Taishi Kato` },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'og:description', name: 'og:description', content: 'Web Developer and Traveler in Tokyo' },
        { hid: 'og:image', name: 'og:image', content: `${this.post.fields.heroImage.fields.file.url}?w=1000` },
      ]
    }
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error);
  },
  mounted() {
    twemoji.parse(document.body);
  }
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 1088px) {
  .container {
    max-width: 740px;
  }
}
</style>
