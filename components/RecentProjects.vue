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

        <base-heading class="info--text">
          Recent Project
        </base-heading>

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
                    :src="require(`@/assets/${project}.jpg`)"
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
          :src="require('@/assets/projects.jpg')"
          height="100%"
          alt="Juan Galeas Working"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',

    data: () => ({
      projects: [
        'project11',
        'project22',
        'project33',
        'project44',
      ],
    }),
  }
</script>
<style scoped>
 .colores {

 }
</style>
