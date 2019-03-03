module.exports = {
  head: {
    title: 'Sam Goddard | Developer',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'I am a web developer from Nottingham with ten plus years of experience in methodical HTML, CSS and JavaScript' }
    ],
    link: [
      { rel: 'stylesheet', href: '//hello.myfonts.net/count/38e2a5' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3d4852' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    ['nuxt-social-meta', {
      url: 'https://samgoddard.netlify.com',
      title: 'Sam Goddard',
      description: 'I am a web developer from Nottingham with ten plus years of experience in methodical HTML, CSS and JavaScript',
      img: 'https://samgoddard.netlify.com/twitter-card.png',
      locale: 'en_GB',
      twitter: '@samuelgoddard'
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
