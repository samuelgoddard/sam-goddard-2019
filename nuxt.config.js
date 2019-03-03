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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Proza+Libre:400,700,800' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://easy.myfonts.net/v2/js?sid=338275(font-family=Recoleta+Medium)&sid=338280(font-family=Recoleta+Light)&sid=338281(font-family=Recoleta+Regular)&sid=338282(font-family=Recoleta+Semi+Bold)&key=9QFyBMxZwB' }
    ]
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
      url: 'https://samgoddard.netlify.com/',
      title: 'Sam Goddard',
      description: 'I\'m a web developer from nottingham with ten plus years of experience in methodical html, css and javascript',
      img: '/twitter-card.png',
      locale: 'en_GB',
      twitter: '@samuelgoddard',
      themeColor: '#000'
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
