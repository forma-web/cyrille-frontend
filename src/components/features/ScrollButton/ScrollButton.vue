<script setup lang="ts">
import { CyrButton } from '@/components/shared/CyrButton';
import { ArrowDownLeftIcon, ArrowUpRightIcon } from '@heroicons/vue/24/solid';
import style from './ScrollButton.module.scss';

type DirectionVariants = 'up' | 'down';

interface DirectionProps {
  direction: DirectionVariants;
}

const { direction } = defineProps<DirectionProps>();

const isUp = computed(() => direction === 'up');

const button = computed(() => ({
  text: isUp.value ? 'Back to top' : 'Scroll down',
  variant: isUp.value ? ('transparent' as const) : ('outline' as const),
  class: isUp.value ? style.button__up : style.button__down,
}));

const scroll = () => {
  window.scrollTo({
    top: direction === 'up' ? 0 : document.body.clientHeight,
    behavior: 'smooth',
  });
};
</script>

<template>
  <CyrButton :class="style.button" :variant="button.variant" @click="scroll">
    <div :class="button.class">
      <span :class="style.button__text">{{ button.text }}</span>
      <ArrowUpRightIcon :class="style.button__icon" v-if="isUp" />
      <ArrowDownLeftIcon :class="style.button__icon" v-else />
    </div>
  </CyrButton>
</template>
