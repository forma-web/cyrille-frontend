<script setup lang="ts">
import styles from './Default.module.scss';
import { DefaultHeader } from '@widgets/Header';
import { Footer } from '@widgets/Footer';

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
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
