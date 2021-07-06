export default {
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  components: true,
  modules: [
    'nuxt-i18n',
  ],
  i18n: {
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        name: 'Chinese',
      },
    ],
    defaultLocale: 'zh',
    vueI18n: {
      fallbackLocale: 'zh',
      messages: {
        en: require('./locales/en.json'),
        zh: require('./locales/zh.json'),
      },
    },
  },
  router: {
    base:'/dist/',
  },
  generate: {
    fallback: true,
    // routes: ['/dynamic/1', '/dynamic/2', '/dynamic/3'],
    // routes(){
    //   const langs = ['/','/en/']
    //   const routes = []
    //   for (const value of langs) {
    //     for (const key of Object.keys( data.pro )) {
    //       routes.push( value + key )
    //     }
    //   }
    //   return routes
    // }
  },
}
