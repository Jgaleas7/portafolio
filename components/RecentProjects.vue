<template>
  <!-- eslint-disable -->
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="info text-center pa-5 white--text"
        cols="12"
        md="6"
      >
        <base-bubble-2
          style="transform: rotate(180deg) translateX(25%)"
        />

        <base-heading>
          Recent Project
        </base-heading>

        <base-text class="mb-5">
          I build a Play Out System from scratch<br>
          list of technologies I used:<br>
          <v-chip
            class="white--text"
            outlined
          >
            Nodejs
          </v-chip>

          <v-chip
            class="white--text"
            outlined
          >
            Vuejs
          </v-chip>

          <v-chip
            class="white--text"
            outlined
          >
            Vuetify
          </v-chip>

          <v-chip
            class="white--text"
            outlined
          >
            socket.io
          </v-chip>

          <v-chip
            class="white--text"
            outlined
          >
            RethinkDB
          </v-chip>

        </base-text>

        <v-card color="secondary">
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
