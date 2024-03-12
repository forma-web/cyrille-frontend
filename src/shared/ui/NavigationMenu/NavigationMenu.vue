<script lang="ts">
import type { NavigationMenuItem } from './types';

interface CyrTabsProps {
  items: NavigationMenuItem[];
}
</script>

<script setup lang="ts">
import styles from './NavigationMenu.module.scss';

const { items } = defineProps<CyrTabsProps>();

defineSlots<{
  default: (props: { route: NavigationMenuItem }) => any;
}>();
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
