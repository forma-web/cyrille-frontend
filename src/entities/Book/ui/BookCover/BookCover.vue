<script setup lang="ts">
import style from './BookCover.module.scss';

interface BookCoverProps {
  name: string;
  image?: string;
}

const { name, image } = defineProps<BookCoverProps>();
</script>

<template>
  <div :class="style.cover">
    <slot>
      <NuxtPicture
        v-if="image"
        :src="image"
        :alt="name"
        :class="style.cover__image"
      />
    </slot>
  </div>
</template>
