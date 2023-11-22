<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <BaseHeader>
    <NuxtLink to="/" class="close-icon">
      <XMarkIcon />
    </NuxtLink>
  </BaseHeader>
</template>

<style lang="scss" scoped>
.close-icon {
  width: 2.4rem;
  height: 2.4rem;
  color: white;
}
</style>
