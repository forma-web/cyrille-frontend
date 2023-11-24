<script setup lang="ts">
import { MENU_ITEMS } from './const/header';
</script>

<template>
  <nav>
    <ul class="menu">
      <li v-for="item in MENU_ITEMS" :key="item.name" class="menu__item">
        <NuxtLink
          :to="item.location"
          class="menu__link"
          active-class="menu__link_active"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  padding: 0;

  display: flex;
  gap: var(--base-gap);

  list-style: none;

  &__item {
    text-transform: uppercase;
  }

  &__link {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.4rem;
    text-decoration-thickness: 0.15rem;
    text-decoration-color: transparent;

    transition: text-decoration-color var(--animation-time);

    &_active {
      text-decoration-color: var(--accent-color);
    }
  }
}
</style>
