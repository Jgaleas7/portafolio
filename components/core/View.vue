<template>
  <div>
    <welcome />

    <recent-projects />

    <!-- <services /> -->
     <about-me />
    <get-in-touch />
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import GetInTouch from '@/components/GetInTouch.vue'
import RecentProjects from '@/components/RecentProjects.vue'
import Services from '@/components/Services.vue'
import WelcomeHead from '@/components/WelcomeHead.vue'

export default {
  name: 'CoreView',

  components: {
    AboutMe,
    GetInTouch,
    RecentProjects,
    Services,
    Welcome: WelcomeHead,
  },
}
</script>
