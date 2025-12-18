// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  devServer: {
    port: Number(process.env.NUXT_PORT) || 3444,
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/scss/my.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  ssr: false,

  app: {
    head: {
      link: [{ rel: "stylesheet", href: "/css/fonts.css" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  typescript: {
    typeCheck: true,
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  experimental: {
    typedPages: true,
  },

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
});
