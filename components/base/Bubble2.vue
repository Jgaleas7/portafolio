<template>
  <!-- eslint-disable -->
  <v-img
    class="grow hidden-sm-and-down"
    contain
    max-height="200"
    width="100%"
    position="bottom left"
    :src="bubbleSrc"
  />
</template>

<script>
import bubbleSrc from '@/assets/bubbles2.png'

export default {
  name: 'BaseBubble2',
  data: () => ({
    bubbleSrc,
  }),
}
</script>
