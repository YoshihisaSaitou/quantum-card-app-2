import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target: "static",
    app: {
        baseURL: '/quantum-card-app-2/',
        //buildAssetsDir: '/',
        cdnURL: '/quantum-card-app-2/',
        head: {
            //title: 'Quantum Card',
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                }
            ]
        }
    },
    //vite: {
    //    clearScreen: false
    //},
    typescript: {
        strict: true
    }
})
