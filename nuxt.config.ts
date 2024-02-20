// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'mlly';

export default defineNuxtConfig({
  srcDir: 'src',
  runtimeConfig: {
    public: {
      baseUrl: 'https://api.cyrille.ru/api/v1',
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  alias: {
    '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
    '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
    '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
    '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
    '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
  },
  components: false,
  dir: {
    public: 'app/public',
    assets: 'app/assets',
    layouts: 'shared/layouts',
  },
  postcss: {
    plugins: {
      'postcss-preset-env': {},
    },
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false,
    },
  },
  vue: {
    propsDestructure: true,
  },
  experimental: {
    typedPages: true,
  },
  typescript: {
    strict: true,
  },
  devtools: {
    enabled: false,
  },
  modules: ['@vee-validate/nuxt', '@nuxt/image'],
  veeValidate: {
    autoImports: false,
  },
});
