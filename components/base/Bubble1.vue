<template>
  <!-- eslint-disable -->
  <v-img
    class="grow hidden-sm-and-down"
    contain
    max-height="200"
    width="100%"
    position="top right"
    :src="bubbleSrc"
  />
</template>

<script>
  export default {
    name: 'BaseBubble1',
    data() {
      // FIX: Move the require call from the template into the script block.
      // In Nuxt SSR environments (Nitro), this ensures the asset path is correctly 
      // bundled and resolved before the component is rendered on the server.
      return {
        bubbleSrc: require('@/assets/bubbles1.png'),
      }
    },
  }
</script>
