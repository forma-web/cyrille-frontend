<template>
  <section class="section">
    <h2 class="heading">
      <slot name="heading"></slot>
    </h2>
    <p class="description">
      <slot name="description"></slot>
    </p>
  </section>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  .heading {
    max-width: 900px;
  }

  .description {
    max-width: 460px;
    color: var(--gray50);
  }
}
</style>
