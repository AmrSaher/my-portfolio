// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: "Amr Saher",
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "nuxt-icon"],
  runtimeConfig: {
    public: {
      LLM_API_URL: process.env.LLM_API_URL,
      LLM_API_KEY: process.env.LLM_API_KEY,
      LLM_MODEL: process.env.LLM_MODEL,
    },
  },
});
