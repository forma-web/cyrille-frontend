<script setup lang="ts">
import styles from './CarouselItem.module.scss';
</script>

<template>
  <li :class="styles.item">
    <slot />
  </li>
</template>
