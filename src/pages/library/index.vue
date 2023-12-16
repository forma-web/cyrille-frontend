<script setup lang="ts"></script>

<template>
  <div>
    <section :class="$style.section">
      <div>
        <h3 :class="$style.section__header">Exclusive</h3>
      </div>
      <div :class="$style.section__content">
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
      </div>
    </section>

    <section :class="$style.section">
      <div>
        <h3 :class="$style.section__header">You may like it</h3>
      </div>
      <div :class="$style.section__content">
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
      </div>
    </section>

    <section :class="$style.section">
      <div>
        <h3 :class="$style.section__header">Top of the week</h3>
      </div>
      <div :class="[$style.section__content, $style.section__content_table]">
        <CyrBookCard card-type="table" v-for="i in 9" :key="i" />
      </div>
    </section>

    <section :class="$style.section">
      <div>
        <h3 :class="$style.section__header">You may like it</h3>
      </div>
      <div :class="$style.section__content">
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
      </div>
    </section>
  </div>
</template>

<style module lang="scss">
.section {
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    gap: 5rem;

    &_table {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 5rem;
    }
  }
}
</style>
