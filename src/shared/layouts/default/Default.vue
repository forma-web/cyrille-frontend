<script setup lang="ts">
import { DefaultHeader } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import styles from './Default.module.scss';

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
  <div :class="styles.layout">
    <DefaultHeader :sticky="stickyHeader" />
    <main class="container">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
