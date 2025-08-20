<template>
  <v-container>
    <nuxt-content :document="article" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>
