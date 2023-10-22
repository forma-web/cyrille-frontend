<template>
  <div class="auth-header">
    <NuxtLink to="#">
      <CyrLogo />
    </NuxtLink>

    <NuxtLink to="#">
      <XMarkIcon class="auth-header__close-icon" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.auth-header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 3%;

  &__close-icon {
    width: 1.5vw;
    color: white;
  }
}
</style>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid';
</script>
