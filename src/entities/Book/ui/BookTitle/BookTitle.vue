<script setup lang="ts">
import styles from './BookTitle.module.scss';
import { CyrRating } from '@shared/ui/Rating';

interface BookTitleProps {
  name: string;
  authors: string[];
}

const { name, authors } = defineProps<BookTitleProps>();
</script>

<template>
  <div :class="styles.title">
    <h1 :class="styles.title_name">{{ name }}</h1>
    <p :class="styles.title_authors">{{ authors.join(', ') }}</p>
    <CyrRating :class="styles.title_rating" :rating="3.5" />
  </div>
</template>
