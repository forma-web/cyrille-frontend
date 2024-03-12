<script setup lang="ts" generic="T extends unknown">
import { CyrCarouselItem } from '..';
import styles from './Carousel.module.scss';

interface CarouselProps {
  items: T[];
}

const { items } = defineProps<CarouselProps>();

defineSlots<{
  default: (props: { item: T }) => unknown;
}>();
</script>

<template>
  <div :class="styles.carousel">
    <ul :class="styles.carousel__list">
      <!-- TODO: fix key -->
      <CyrCarouselItem
        v-for="(item, idx) in items"
        :key="idx"
        :class="styles.carousel__item"
      >
        <slot :item="item" />
      </CyrCarouselItem>
    </ul>
  </div>
</template>
