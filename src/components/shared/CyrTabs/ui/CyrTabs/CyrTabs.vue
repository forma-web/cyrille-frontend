<script setup lang="ts">
import style from './CyrTabs.module.scss';
import type { TabItem } from '../../types';

interface CyrTabsProps {
  items: TabItem[];
}

const { items } = defineProps<CyrTabsProps>();
</script>

<template>
  <nav :class="style.container">
    <ul :class="style.tabs">
      <li v-for="item in items" :key="item.name">
        <NuxtLink :to="item.location">
          <CyrTab>
            {{ item.name }}
          </CyrTab>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
