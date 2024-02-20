<script setup lang="ts">
import type { NavigationMenuItem } from './types';
import styles from './NavigationMenu.module.scss';

interface CyrTabsProps {
  items: NavigationMenuItem[];
}

defineSlots<{
  default(props: { route: NavigationMenuItem }): any;
}>();

const { items } = defineProps<CyrTabsProps>();
</script>

<template>
  <nav :class="styles.navigation">
    <ul :class="styles.navigation__list">
      <li
        v-for="item in items"
        :key="item.name"
        :class="styles.navigation__item"
      >
        <slot :route="item">
          <NuxtLink
            :to="item.location"
            :class="styles.navigation__link"
            :active-class="styles.navigation__link_active"
          >
            {{ item.name }}
          </NuxtLink>
        </slot>
      </li>
    </ul>
  </nav>
</template>
