<script setup lang="ts">
import { BookCover } from '@entities/Book';
import { CyrButton } from '@shared/ui/Button';
import { BookDescription, BookTitle } from '@entities/Book';
import { getBook } from '@entities/Book';

const route = useRoute();
const { data } = await getBook(route.params.id);
</script>

<template>
  <div :class="$style.book">
    <div :class="$style.book_cover">
      <BookCover :name="data?.data.name" :image="data?.data.thumbnail_image" />
      <div :class="$style.book_controls">
        <CyrButton variant="outline" full> Get for $ 5,99 </CyrButton>
        <CyrButton full> Get with 7 free trial </CyrButton>
      </div>
    </div>
    <div>
      <BookTitle :name="data?.data.name" :authors="['Cyrille D’essai']" />
      <BookDescription :description="data?.data.description" />
    </div>
  </div>
</template>

<style module lang="scss">
.book {
  margin: 4rem 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10rem;

  &_cover {
    //justify-self: center;
    width: 30rem;
    display: flex;
    flex-direction: column;
    row-gap: var(--base-gap);
  }

  &_controls {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
}
</style>
