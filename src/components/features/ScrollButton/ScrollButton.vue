<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';
import { ArrowDownLeftIcon } from '@heroicons/vue/24/solid';

type DirectionVariants = 'up' | 'down';

interface DirectionProps {
  direction: DirectionVariants;
}
defineProps<DirectionProps>();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const scrollToDown = () => {
  window.scrollTo({
    top: document.body.clientHeight,
    behavior: 'smooth',
  });
};
</script>

<template>
  <CyrButton
    class="button"
    variant="transparent"
    v-if="direction === 'up'"
    @click="scrollToTop"
  >
    <div class="button__up">
      <span class="button__text accent-font">Back to top</span>
      <ArrowUpRightIcon class="button__icon" />
    </div>
  </CyrButton>

  <CyrButton
    class="button"
    variant="outline"
    v-else-if="direction === 'down'"
    @click="scrollToDown"
  >
    <div class="button__down">
      scroll down
      <ArrowDownLeftIcon class="button__icon" />
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
