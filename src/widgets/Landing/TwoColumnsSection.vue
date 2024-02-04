<script setup lang="ts"></script>

<template>
  <section class="section">
    <div class="section__container">
      <div class="section__column">
        <slot name="left"></slot>
      </div>
      <div class="section__column">
        <slot name="right"></slot>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  height: 60rem;
  padding: 5rem 0;

  &__container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
  }

  &__column {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: var(--base-gap);
  }
}
</style>
