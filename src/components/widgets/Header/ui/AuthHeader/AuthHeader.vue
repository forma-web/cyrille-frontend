<script setup lang="ts">
import { Header } from '..';
import { XMarkIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <Header>
    <NuxtLink to="/" :class="$style.icon">
      <XMarkIcon />
    </NuxtLink>
  </Header>
</template>

<style module lang="scss">
.icon {
  width: 2.4rem;
  height: 2.4rem;

  color: white;
}
</style>
