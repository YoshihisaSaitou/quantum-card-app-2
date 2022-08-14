import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target: "static",
    app: {
        baseURL: '/quantum-card-app-2/',
        cdnURL: '/quantum-card-app-2/'
    },
    //vite: {
    //    clearScreen: false
    //},
    typescript: {
        strict: true
    }
})
