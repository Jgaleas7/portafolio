<template>
  <v-footer
    height="88"
    class="justify-center"
  >
    <social-media large />
  </v-footer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'CoreFooter',

  components: {
    SocialMedia,
  },
}
</script>
