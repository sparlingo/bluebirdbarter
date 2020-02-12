
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    '@nuxtjs/auth'
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:8000',
    //proxy: true
  },
  proxy: {
    //'/api': 'http://localhost:8000/api'
  },
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/auth/signed-in'
    },
  //   strategies: {
      // local: {
      //   endpoints: {
      //     login: { url: '/api/users/login', method: 'post', propertyName: 'token' },
      //     // logout: { url: 'logout', method: 'post' },
      //     register: { url: '/api/users/register', method: 'post' },
      //     user: { url: 'me', method: 'get', propertyName: 'data' },
      //     logout: false
      //   }
      // }
      // github: {
      //   client_id: '54f80cbbfe1ddb38e9ed',
      //   client_secret: '35550f038d10b3610d1065a414ddedfed2f57bca'
      // },
    // strategies: {
    //   auth0: {
    //     domain: 'sparlingo.auth0.com',
    //     client_id: 'yhBWDsauIwnk5mVonVFxHGLiUJzSEvbp',
    //     audience: 'https://sparlingo.auth0.com/api/v2/'
    //   }
    // },
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
