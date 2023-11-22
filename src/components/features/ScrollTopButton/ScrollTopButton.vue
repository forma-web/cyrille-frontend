<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <CyrButton class="button" variant="transparent" @click="scrollToTop">
    <div class="button__container">
      <span class="button__text accent-font">Back to top</span>
      <ArrowUpRightIcon class="button__icon" />
    </div>
  </CyrButton>
</template>

<style scoped lang="scss">
.button {
  --button-height: 1.8rem;

  color: white;
  border-color: white;

  .button__container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .button__icon {
    width: var(--button-height);
    height: var(--button-height);
  }

  .button__text {
    font-size: var(--button-height);
    text-transform: none;
  }
}
</style>
