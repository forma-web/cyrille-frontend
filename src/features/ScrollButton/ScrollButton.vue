<script lang="ts">
type DirectionVariants = 'up' | 'down';

interface DirectionProps {
  direction: DirectionVariants;
}
</script>

<script setup lang="ts">
import { CyrButton } from '@shared/ui/Button';
import { ArrowDownLeftIcon, ArrowUpRightIcon } from '@heroicons/vue/24/solid';
import styles from './ScrollButton.module.scss';

const { direction } = defineProps<DirectionProps>();

const isUp = computed(() => direction === 'up');

const button = computed(() => ({
  text: isUp.value ? 'Back to top' : 'Scroll down',
  variant: isUp.value ? ('transparent' as const) : ('outline' as const),
  class: isUp.value ? styles.button__up : styles.button__down,
}));

function scroll() {
  window.scrollTo({
    top: direction === 'up' ? 0 : document.body.clientHeight,
    behavior: 'smooth',
  });
}
</script>

<template>
  <CyrButton :class="styles.button" :variant="button.variant" @click="scroll">
    <div :class="button.class">
      <span :class="styles.button__text">{{ button.text }}</span>
      <ArrowUpRightIcon v-if="isUp" :class="styles.button__icon" />
      <ArrowDownLeftIcon v-else :class="styles.button__icon" />
    </div>
  </CyrButton>
</template>
