// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'WebWeMade',
        htmlAttrs: {
          lang: 'fr'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'WebWeMade', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'Création de sites webs, applications mobiles, bots'
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/logoEmpty.png' }]
      }
    },
    css: [
        '@/assets/styles/reset.css',
    ],
    runtimeConfig: {
        // The private keys which are only available server-side

        apiSecret: '123',
        token: '',

        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
      }
})
