// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head: {
        charset: 'utf-16',
        viewport: 'width=500, initial-scale=1',
        title: 'WebWeMade',
        meta: [
          { name: "WebWeMade, l'agence de création de sites webs", content: 'Création de sites webs, applications mobiles, bots' }
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
