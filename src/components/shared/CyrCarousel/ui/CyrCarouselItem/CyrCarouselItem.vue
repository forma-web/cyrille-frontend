<script setup lang="ts">
import style from './CyrCarouselItem.module.scss';
</script>

<template>
  <li :class="style.item">
    <slot />
  </li>
</template>
