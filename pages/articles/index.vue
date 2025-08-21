<template>
  <v-container>
    <v-row>
      <v-col
        v-for="article in articles"
        :key="article.slug"
        cols="12"

        sm="6"
        md="4"
      >
        <v-card
          nuxt
          :to="`/articles/${article.slug}`"
          class="ma-2"
          outlined
        >
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>{{ article.description }}</v-card-text>
        </v-card>

     
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
