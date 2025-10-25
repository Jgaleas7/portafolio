import BaseBtn from '@/components/base/Btn.vue'
import BaseHeading from '@/components/base/Heading.vue'
import BaseSubheading from '@/components/base/Subheading.vue'
import BaseText from '@/components/base/Text.vue'
import BaseBubble1 from '@/components/base/Bubble1.vue'
import BaseBubble2 from '@/components/base/Bubble2.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('BaseBtn', BaseBtn)
  nuxtApp.vueApp.component('BaseHeading', BaseHeading)
  nuxtApp.vueApp.component('BaseSubheading', BaseSubheading)
  nuxtApp.vueApp.component('BaseText', BaseText)
  nuxtApp.vueApp.component('BaseBubble1', BaseBubble1)
  nuxtApp.vueApp.component('BaseBubble2', BaseBubble2)
})
