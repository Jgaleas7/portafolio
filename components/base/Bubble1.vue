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
import bubbleSrc from '@/assets/bubbles1.png'

export default {
  name: 'BaseBubble1',
  data() {
    return {
      bubbleSrc,
    }
  },
}
</script>
