// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'DeltaSevenTech — Digital Products, Platforms & Infrastructure',
      meta: [
        {
          name: 'description',
          content:
            'DeltaSevenTech is a Ukraine-based technology company building scalable digital systems, SaaS platforms, and AI-driven solutions for global markets.',
        },
        { name: 'theme-color', content: '#050816' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },

  content: {
    highlight: false,
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'EN', file: 'en.json' },
      { code: 'uk', name: 'УК', file: 'uk.json' },
    ],
    langDir: '../locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  nitro: {
    preset: 'vercel',
  },
})
