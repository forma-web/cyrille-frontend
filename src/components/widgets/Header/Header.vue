<script setup lang="ts">
import { UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

// TODO: remove
const route = useRoute();
const isHome = computed(() => route.path === '/');
const style = computed(() => (!isHome.value ? { color: 'white' } : {}));
</script>

<template>
  <BaseHeader :sticky="isHome" :style="style">
    <div class="navbar">
      <Menu />
      <div class="navbar__actions">
        <MagnifyingGlassIcon class="navbar__icon" />
        <UserCircleIcon class="navbar__icon" />
      </div>
    </div>
  </BaseHeader>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 8rem;

  &__actions {
    display: flex;
    gap: var(--base-gap);
  }

  &__icon {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>
