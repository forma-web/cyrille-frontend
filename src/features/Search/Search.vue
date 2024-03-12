<script setup lang="ts">
import { CyrInput } from '@shared/ui/Input';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import styles from './Search.module.scss';
</script>

<template>
  <div :class="styles.search">
    <MagnifyingGlassIcon :class="styles.search__icon" />
    <CyrInput placeholder="Search..." />
  </div>
  <div>
    <h6 :class="styles.popular__title">
      Popular searches
    </h6>
    <ul :class="styles.popular__list">
      <li :class="styles.popular__item">
        <MagnifyingGlassIcon :class="styles.popular__icon" />React
      </li>
      <li :class="styles.popular__item">
        <MagnifyingGlassIcon :class="styles.popular__icon" />Vue
      </li>
      <li :class="styles.popular__item">
        <MagnifyingGlassIcon :class="styles.popular__icon" />Angular
      </li>
      <li :class="styles.popular__item">
        <MagnifyingGlassIcon :class="styles.popular__icon" />Svelte
      </li>
      <li :class="styles.popular__item">
        <MagnifyingGlassIcon :class="styles.popular__icon" />TypeScript
      </li>
    </ul>
  </div>
</template>
