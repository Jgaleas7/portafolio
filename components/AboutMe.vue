<template>
  <!-- eslint-disable -->
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="white"
      no-gutters
    >
      <v-col
        class="pa-5"
        cols="12"
        md="6"
      >


        <base-heading class="info--text">
          About Me
        </base-heading>

        <base-text class="mb-5">
          I am a person committed to my job, I have innovative ideas. <br>
          I like new projects and challenges that the company where I intend to work could provide.

        </base-text>

        <base-subheading class="info--text">
          Skills
        </base-subheading>

        <base-text class="mb-5">
          Software Development
        </base-text>

        <v-alert
          outlined
          color="info"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
              v-text="`${skill.value}%`"
            />

            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="6"
      >

        <base-bubble-1 style="transform: translate(5%, -5%)" />
        <base-subheading class="info--text">
          Skills
        </base-subheading>
        <base-text class="mb-5">
          Video and Production
        </base-text>

        <v-alert
          outlined
          color="info"
        >
          <v-row
            v-for="(skill, i) in skills2"
            :key="i"
            style="color: #69A1BB;"
          >
            <v-col
              class="text-uppercase"
              cols="6"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              cols="6"
              v-text="`${skill.value}%`"
            />

            <v-progress-linear
              :value="skill.value"
              color="info"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'JavaScript + TypeScript /  Vuejs, Nuxtjs',
          value: 100,
        },
        {
          name: 'Nodejs/ Fastify, Koajs',
          value: 100,
        },
        {
          name: 'Web Support',
          value: 100,
        },
        {
          name: 'Long Time ago PHP/Laravel',
          value: 100,
        },
        {
          name: 'Mysql, PG,Firebase, Testing Supabase',
          value: 100,
        },
      ],
      skills2: [
        {
          name: 'Open Broadcaster Software',
          value: 100,
        },
        {
          name: 'Vmix and Caspercg',
          value: 100,
        },
        {
          name: 'FFMPEG, TRICASTER',
          value: 100,
        },
        {
          name: 'WEBRTC, VIDEOCONFERENCING, Video RECORD',
          value: 100,
        },
        {
          name: 'PROTOCOLS Audio&Video: OPUS, H264, VP9...  ',
          value: 100,
        },
      ],
    }),
  }
</script>
