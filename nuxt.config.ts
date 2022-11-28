// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
