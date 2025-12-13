// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";
export default defineNuxtConfig({
  devServer: {
    port: Number(process.env.NUXT_PORT) || 3000,
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/scss/my.scss"],
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

  modules: [
    "@pinia/nuxt",
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
