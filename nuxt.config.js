import colors from 'vuetify/es5/util/colors'

export default {
target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: ' Best Victoria web Developer - Juan Galeas' || process.env.npm_package_name ,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: '2nWD7jKMTgak4y08fDNmpD8Acer1xWxBaz5SbiXY__s' },
      { name: 'msvalidate.01', content: '94A04C0AEC5C104541CF075BD640DCEA' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'keywords', name: 'keywords', content: 'software engineer, web development, build my website, computer science, Juan Galeas' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/robots', { Sitemap: 'https://juangaleas.xyz/sitemap.xml' }],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://juangaleas.xyz',
    lastmod: '2022-03-24',
    // options
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
     // dark: false,
      themes: {
        light: {
          primary: '#D3C3BC',
          accent: '#D8EBF1',
          secondary: '#BFADA5',
          info: '#5B5C79',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
