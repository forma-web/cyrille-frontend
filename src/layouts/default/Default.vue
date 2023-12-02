<script setup lang="ts">
import { DefaultHeader } from '@/components/widgets/Header';

const route = useRoute();

const darkMode = computed(() => route.meta.darkMode ?? false);
const stickyHeader = computed(() => route.meta.stickyHeader ?? true);

watchEffect(() => {
  useHead({
    bodyAttrs: {
      class: darkMode.value ? 'dark' : '',
    },
  });
});
</script>

<template>
  <div class="default-layout">
    <DefaultHeader :sticky="stickyHeader" />
    <main class="default-layout__content">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
