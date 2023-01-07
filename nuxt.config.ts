// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [['nuxt-swiper', {
      // Swiper options
    }]],
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
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/images/logoEmpty.png' },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Nunito&display=swap",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap",
          },
        ]
      }
    },

    css: [
      '@/assets/styles/reset.css',
      '@/assets/styles/global.css',
    ],
  
    runtimeConfig: {
      // The private keys which are only available server-side

        apiSecret: '123',
        token: '',

        // Keys within public are also exposed client-side
        public: {
          apiBase: '/api'
        }
    },
})
