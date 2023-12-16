<script setup lang="ts">
import style from './CarouselItem.module.scss';
</script>

<template>
  <li :class="style.item">
    <slot />
  </li>
</template>
