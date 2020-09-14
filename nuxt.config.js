import { URL2 } from './config/var'

export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'spa',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    loading: false,
    /*
     ** Global CSS
     */
    css: ['normalize.css', '~/assets/scss/style.scss'],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/pwa',
        'nuxt-webfontloader',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/auth/login',
                        method: 'post',
                        propertyName: 'token',
                    },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: {
                        url: '/auth/user',
                        method: 'get',
                        propertyName: 'user',
                    },
                },
                // tokenRequired: true,
                // tokenType: 'bearer',
                // globalToken: true,
                // autoFetchUser: true
            },
        },
        redirect: {
            login: '/auth/login',
            home: '/',
        },
    },
    axios: {
        baseURL: URL2,
    },
    webfontloader: {
        events: false,
        google: {
            families: ['Roboto:400,500,600:cyrillic&display=swap'],
        },
        timeout: 5000,
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    server: {
        port: 3037,
        host: '0.0.0.0',
    },
    build: {},
}
