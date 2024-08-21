// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    turnstile: {
      secretKey: process.env.SECRET_KEY
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: ['@/assets/main.css'],
  modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/turnstile', ['nuxt-mail', {
    message: {
      to: process.env.EMAIL_RECEIVER,
    },
    smtp: {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_RECEIVER,
        pass: process.env.EMAIL_KEY
      },
    },
  }],
],
  turnstile: {
    siteKey: process.env.SITE_KEY,
    addValidateEndpoint: true
  },

  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue']
    }
  }
})