<script setup lang="ts">
import { ArrowUpRightIcon, ArrowDownLeftIcon } from '@heroicons/vue/24/solid';

type DirectionVariants = 'up' | 'down';

interface DirectionProps {
  direction: DirectionVariants;
}

const { direction } = defineProps<DirectionProps>();

const button = computed(() => ({
  text: direction === 'up' ? 'Back to top' : 'Scroll down',
  variant: direction === 'up' ? ('transparent' as const) : ('outline' as const),
}));

const scroll = () => {
  window.scrollTo({
    top: direction === 'up' ? 0 : document.body.clientHeight,
    behavior: 'smooth',
  });
};
</script>

<template>
  <CyrButton class="button" :variant="button.variant" @click="scroll">
    <div class="button__up">
      <span class="button__text">{{ button.text }}</span>
      <ArrowUpRightIcon class="button__icon" v-if="direction === 'up'" />
      <ArrowDownLeftIcon class="button__icon" v-else />
    </div>
  </CyrButton>
</template>

<style scoped lang="scss">
.button {
  --button-height: 1.8rem;

  color: white;
  border-color: white;

  &__up {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__down {
    display: flex;
    align-items: center;
    gap: 7rem;
  }

  &__icon {
    width: var(--button-height);
    height: var(--button-height);
  }

  &__text {
    font-size: var(--button-height);
    text-transform: none;
  }
}
</style>
