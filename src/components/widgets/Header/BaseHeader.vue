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

  // TODO: remove
  & svg {
    color: var(--secondary-text-color);
  }

  &_sticky {
    position: sticky;
    background-color: var(--primary-background-color);

    // TODO: remove
    & svg {
      color: var(--primary-text-color);
    }
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
