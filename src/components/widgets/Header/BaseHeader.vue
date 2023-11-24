<script setup lang="ts">
export interface BaseHeaderProps {
  sticky?: boolean;
}

const { sticky = false } = defineProps<BaseHeaderProps>();
</script>

<template>
  <header class="header" :class="{ header_sticky: sticky }">
    <div class="header__container">
      <NuxtLink to="/">
        <CyrLogo />
      </NuxtLink>
      <slot></slot>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 100;
  color: white;
  &_sticky {
    position: sticky;
  }

  &__container {
    width: 100%;
    padding: var(--header-padding);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
