<template>
  <v-container>
    <v-row>
      <v-col
        v-for="article in articles"
        :key="article.slug"
        cols="12"
      >
        <nuxt-link :to="`/articles/${article.slug}`">
          <h2>{{ article.title }}</h2>
        </nuxt-link>
        <p>{{ article.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return { articles }
  }
}
</script>
