// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  components: [
    // TODO: remove
    {
      path: '@/components/cyr',
      pattern: '**/*.vue',
      pathPrefix: true,
      prefix: 'Cyr',
    },
    { path: '@/components/ui', pattern: '**/*.vue', pathPrefix: false },
    { path: '@/components/features', pattern: '**/*.vue', pathPrefix: false },
    { path: '@/components/widgets', pattern: '**/*.vue', pathPrefix: false },
  ],
  vue: {
    propsDestructure: true,
  },
  typescript: {
    strict: true,
  },
  devtools: {
    enabled: false,
  },
});
