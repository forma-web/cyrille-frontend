<script setup lang="ts" generic="T extends unknown">
import { CyrCarouselItem } from '..';
import style from './CyrCarousel.module.scss';

interface CarouselProps {
  items: T[];
}

const { items } = defineProps<CarouselProps>();

defineSlots<{
  default(props: { item: T }): unknown;
}>();
</script>

<template>
  <div :class="style.carousel">
    <ul :class="style.carousel__list">
      <!-- TODO: fix key -->
      <CyrCarouselItem
        v-for="(item, idx) in items"
        :key="idx"
        :class="style.carousel__item"
      >
        <slot :item="item" />
      </CyrCarouselItem>
    </ul>
  </div>
</template>
