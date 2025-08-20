<template>
  <!-- eslint-disable -->
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down main-image"
        md="6"
      >

        <v-img
          :src="require('@/assets/me.jpg')"
          class="hero-image"
          alt="picture of Juan Galeas, a software engineer"
        />

      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="8"
          >
            <base-heading >I'm Juan Galeas,</base-heading>
            <base-text>
              I’m a full-stack developer based in Victoria, Canada.
              Learn about what I’ve done and get in touch with me.
              Let's work together.
            </base-text>

          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>
<style>



.main-image {
  display: flex;
  justify-content: center;
}

.hero-image {
  width: 100%;
  height: auto;
  max-height: 100vh;
}
</style>
