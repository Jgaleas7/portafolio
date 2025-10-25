<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'white'"
    fixed
    flat
  >
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="logoSrc"
        class="shrink"
        contain
        height="50"
      />
    </v-slide-x-transition>

    <v-spacer />

    <v-btn
      class="ma-2"
      color="info"
      text
      to="/articles"
    >
      Articles
    </v-btn>

    <social-media />

  </v-app-bar>
</template>

<script>
import logoSrc from '@/assets/logo.png'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'CoreAppBar',

  components: {
    SocialMedia,
  },

  data: () => ({
    showLogo: false,
    isScrolling: false,
    logoSrc,
  }),

  methods: {
    onScroll () {
      const offset = window.pageYOffset
      this.isScrolling = offset > 50
      this.showLogo = offset > 200
    },
  },
}
</script>
