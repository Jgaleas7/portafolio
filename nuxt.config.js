import colors from 'vuetify/es5/util/colors'

export default {
target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: ' Best Victoria web Developer - Juan Galeas' || process.env.npm_package_name ,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: '2nWD7jKMTgak4y08fDNmpD8Acer1xWxBaz5SbiXY__s' },
      { name: 'msvalidate.01', content: '94A04C0AEC5C104541CF075BD640DCEA' },
      { hid: 'keywords', name: 'keywords', content: 'software engineer, web development, build my website, computer science, Juan Galeas' },
      { hid: 'description', name: 'description', content:"Juan Galeas's Software Engineer Portfolio" },
      { name:'theme-color', content:'#DD9C3C'},
      { name:'author', content:'Juan Galeas'}
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
    '@nuxtjs/google-analytics'
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
    lastmod: '2022-04-08',
    // options
  },
  
   googleAnalytics: {
    id: 'G-974JRZT0HG'
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
          primary: '#BF7506',//'#D3C3BC',
          accent: '#D8EBF1',
          secondary: '#BF7506', //'#BFADA5',
          info:  '#BF7506',
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
