<template>
  <v-app>
    <core-app-bar />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
import CoreAppBar from '@/components/core/AppBar.vue'
import CoreFooter from '@/components/core/Footer.vue'
import CoreView from '@/components/core/View.vue'

export default {
  name: 'App',

  components: {
    CoreAppBar,
    CoreFooter,
    CoreView,
  },
}
</script>
