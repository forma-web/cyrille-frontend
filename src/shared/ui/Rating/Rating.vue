<script setup lang="ts">
import styles from './Rating.module.scss';
import { clamp } from '../../lib/math';
import { CyrRhombus } from '../Rhombus';

interface RatingProps {
  rating?: number;
  max?: number;
}

const { rating = 0, max = 5 } = defineProps<RatingProps>();

const filled = computed(() => new Array(Math.floor(max)).fill(0));
</script>

<template>
  <div :class="styles.rating">
    <div :class="styles.rating__container">
      <CyrRhombus
        v-for="(_, index) in filled"
        :key="index"
        :filled="clamp(rating - index, 1, 0)"
      />
    </div>
  </div>
</template>
