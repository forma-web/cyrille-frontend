<script setup lang="ts">
interface ImageCardSectionProps {
  background: string;
}

const { background } = defineProps<ImageCardSectionProps>();
</script>

<template>
  <section class="section">
    <div class="section__background">
      <img :src="background" alt="" />
    </div>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.section {
  height: 70rem;
  position: relative;

  &__background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: var(--rounding-xl);
      object-fit: cover;
    }
  }
}
</style>
