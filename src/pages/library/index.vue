<script setup lang="ts">
import { BookCover } from '@entities/Book';

const selected = ref('all');
</script>

<template>
  <div>
    <nav :class="$style.nav">
      <ul>
        <li :class="{ selected: selected === 'all' }">All</li>
        <li :class="{ selected: selected === 'new' }">New</li>
        <li :class="{ selected: selected === 'popular' }">Popular</li>
        <li :class="{ selected: selected === 'soon' }">Soon</li>
      </ul>
    </nav>
    <section :class="$style.section">
      <div>
        <h3 :class="$style.section__header">Exclusive</h3>
      </div>
      <div :class="$style.section__content">
        <BookCover
          name="Cyrille"
          :image="`/images/${i}.png`"
          v-for="i in 5"
          :key="i"
        />
      </div>
    </section>

    <section :class="$style.section">
      <div>
        <h3 :class="$style.section__header">You may like it</h3>
      </div>
      <div :class="$style.section__content">
        <BookCover
          name="Cyrille"
          :image="`/images/${i}.png`"
          v-for="i in 5"
          :key="i"
        />
      </div>
    </section>

    <section :class="$style.section">
      <div>
        <h3 :class="$style.section__header">You may like it</h3>
      </div>
      <div :class="$style.section__content">
        <BookCover
          name="Cyrille"
          :image="`/images/${i}.png`"
          v-for="i in 5"
          :key="i"
        />
      </div>
    </section>
  </div>
</template>

<style module lang="scss">
.nav {
  & > ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    & > li {
      cursor: pointer;
      color: var(--gray50);
      text-transform: uppercase;
    }

    & > li.selected {
      color: var(--primary-text-color);
      text-decoration: underline;
    }
  }
}

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
