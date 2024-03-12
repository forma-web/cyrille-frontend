<script lang="ts">
interface BookCoverProps {
  name: string;
  image?: string;
}
</script>

<script setup lang="ts">
import styles from './BookCover.module.scss';

const { name, image } = defineProps<BookCoverProps>();
</script>

<template>
  <div :class="styles.cover">
    <slot>
      <NuxtPicture
        v-if="image"
        :src="image"
        :alt="name"
        :class="styles.cover__image"
      />
    </slot>
  </div>
</template>
