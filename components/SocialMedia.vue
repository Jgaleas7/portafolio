<template>
  <!-- eslint-disable -->
  <div>
    <v-btn
      fab
      class="ma-2"
      color="info"
      :small="!large"
      href="https://www.linkedin.com/in/juan-galeas/"
      link
      target="_blank"
    >
      <v-icon
        dark
      >mdi-linkedin</v-icon>
    </v-btn>

    <v-btn
      fab
      class="ma-2"
      color="info"
      :small="!large"
      href="mailto:juangaleassantos@gmail.com"
      link
    >
      <v-icon
        dark
      >mdi-email</v-icon>
    </v-btn>

    <v-btn
      fab
      class="ma-2"
      color="info"
      :small="!large"
      href="tel:778-557-7701"
      link
    >
      <v-icon
        dark
      >mdi-phone</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          name: 'Linkedin',
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/juan-galeas/',
        },
        {
          name: 'Email',
          icon: 'mdi-email',
          url: 'juangaleassantos@gmail.com',
        },
        {
          name: 'Phone',
          icon: 'mdi-phone',
          url: '778-557-7701',
        },
      ],
    }),
  }
</script>
