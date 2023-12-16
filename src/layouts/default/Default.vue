<script setup lang="ts">
import { DefaultHeader } from '@/components/widgets/Header';
import { Footer } from '@/components/widgets/Footer';

const route = useRoute();

const stickyHeader = computed(() => route.meta.stickyHeader ?? true);
const mode = computed(() => (route.meta.darkMode ? 'dark' : ''));

useHead({
  bodyAttrs: {
    class: mode,
  },
});
</script>

<template>
  <div>
    <DefaultHeader :sticky="stickyHeader" />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
