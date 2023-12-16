// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },
  components: [
    // TODO: remove
    {
      path: '@/components/cyr',
      pattern: '**/*.vue',
      pathPrefix: true,
      prefix: 'Cyr',
    },
  ],
  postcss: {
    plugins: {
      'postcss-preset-env': {},
    },
  },
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  typescript: {
    strict: true,
  },
  devtools: {
    enabled: false,
  },
  modules: ['@vee-validate/nuxt'],
  veeValidate: {
    autoImports: false,
  },
});
