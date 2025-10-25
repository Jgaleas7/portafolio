<template>
  <!-- eslint-disable -->
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class=" text-center pa-5"
        cols="12"
        md="6"

      >
        <base-bubble-2
          style="transform: rotate(180deg) translateX(25%)"
        />

         <h2 class="display-3 v-heading mb-3 font-weight-light info--text" >
          Recent Project
        </h2>

        <base-text class="mb-5">
          I build a Play Out System from scratch<br>
          list of technologies I used:<br>
          <v-chip
            color="#DD9C3C"
            text-color="black"
            outlined
          >
            Nodejs
          </v-chip>

          <v-chip
              color="#DD9C3C"
              text-color="black"
              outlined
          >
            Vuejs
          </v-chip>

          <v-chip
              color="#DD9C3C"
              text-color="black"
              outlined
          >
            Vuetify
          </v-chip>

          <v-chip
              color="#DD9C3C"
              text-color="black"
              outlined
          >
            socket.io
          </v-chip>

          <v-chip
              color="#DD9C3C"
              text-color="black"
              outlined
          >
            RethinkDB
          </v-chip>

        </base-text>

        <v-card color="#F4DEBE">
          <v-container class="pa-2">
            <v-row>
              <v-col
                v-for="project in projects"
                :key="project"
                cols="12"
                md="6"
              >
                <a href="#">
                  <v-img
                    :src="project"
                    max-height="300"
                  />
                </a>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >
        <v-img
          :src="projectsImage"
          height="100%"
          alt="Juan Galeas Working"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import project11Image from '@/assets/project11.jpg'
import project22Image from '@/assets/project22.jpg'
import project33Image from '@/assets/project33.jpg'
import project44Image from '@/assets/project44.jpg'
import projectsImage from '@/assets/projects.jpg'

export default {
  name: 'RecentProjects',

  data: () => ({
    projects: [
      project11Image,
      project22Image,
      project33Image,
      project44Image,
    ],
    projectsImage,
  }),
}
</script>
<style scoped>
 .colores {

 }
</style>
