<template>
  <header class="auth-header">
    <NuxtLink to="/">
      <CyrLogo />
    </NuxtLink>

    <NuxtLink to="/">
      <XMarkIcon class="auth-header__close-icon" />
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.auth-header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;

  &__close-icon {
    width: 3rem;
    color: white;
  }
}
</style>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';
</script>
