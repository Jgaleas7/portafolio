// Note: This is now nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';

// This import is no longer needed with Vuetify 3
// import colors from 'vuetify/es5/util/colors'

export default defineNuxtConfig({
  // 'target' is no longer used.
  // For a static site, you just run `npx nuxi generate`.
  // If you want a client-side-only SPA, you'd add: ssr: false
dir: {
    public: 'static'
  },
  // 'head' is now nested inside 'app'
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Best Victoria web Developer - Juan Galeas',
      titleTemplate: '%s - Juan Galeas', // Simplified this a bit
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: '2nWD7jKMTgak4y08fDNmpD8Acer1xWxBaz5SbiXY__s' },
        { name: 'msvalidate.01', content: '94A04C0AEC5C104541CF075BD640DCEA' },
        { hid: 'keywords', name: 'keywords', content: 'software engineer, web development, build my website, computer science, Juan Galeas' },
        { hid: 'description', name: 'description', content: "Juan Galeas's Software Engineer Portfolio" },
        { name: 'theme-color', content: '#DD9C3C' },
        { name: 'author', content: 'Juan Galeas' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // 'components: true' is now the default, so it can be removed.
  // 'loading' progress bar is also handled differently, often with a
  // custom component like <NuxtLoadingIndicator>

  /*
  ** Global CSS
  */
  css: [
    // Your global CSS files
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/base',
  ],

  /*
  ** 'buildModules' and 'modules' are now merged into just 'modules'
  */
  modules: [
    // THIS IS THE BIGGEST CHANGE
    // You need to install 'vuetify-nuxt-module' for Nuxt 3
    'vuetify-nuxt-module',

    // These modules are likely the same or have Nuxt 3-compatible versions
   'nuxt-gtag',
    '@nuxtjs/sitemap',
    '@nuxt/content'
  ],
  nitro: {
    preset: 'netlify-static',
    prerender: {
      routes: articleRoutes,
    },
  },
  /*
  ** Module configurations
  */
  sitemap: {
    hostname: 'https://juangaleas.com',
    lastmod: '2025-08-08',
  },

  gtag: {
    id: 'G-974JRZT0HG'
  },
vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
    // The following config helps address the TTY error in some non-interactive environments
    build: {
      rollupOptions: {
        external: ['tty']
      }
    },
    // NEW: Add commonjsOptions to tell Vite/Rollup how to handle older CommonJS dependencies
    // This often forces them to be correctly converted to ES Modules (import/export) for the browser.
    optimizeDeps: {
      include: ['@nuxt/content'] // Explicitly include modules that might contain CJS
    },
    // The CJS transform option is typically for dev, but sometimes useful in build settings too
    commonjsOptions: {
      // Tries to transform CommonJS modules into ES Modules for the browser
      transformMixedEsModules: true, 
      // If a specific package is causing the issue, we can list it here to force inclusion/processing
      include: /node_modules/ 
    }
  },
  /*
  ** vuetify module configuration for Nuxt 3
  ** This is completely different from Nuxt 2
  */
  vuetify: {
    // This replaces the old 'customVariables'
    styles: {
      configFile: '~/assets/variables.scss'
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            dark: false, // Explicitly set dark mode to false
            colors: { // Note the nested 'colors' object
              primary: '#BF7506',
              accent: '#D8EBF1',
              secondary: '#BF7506',
              info: '#BF7506',
              // You must provide the direct hex codes now
              warning: '#FFC107', // This was colors.amber.base
              error: '#DD2C00',   // This was colors.deepOrange.accent4
              success: '#00E676'  // This was colors.green.accent3
            }
          }
        }
      }
    }
  },

  // 'build' is no longer used for webpack extensions in this way.
  // You would use 'vite: { ... }' or 'webpack: { ... }' if needed.
  // Since yours was empty, we can just remove it.
})
