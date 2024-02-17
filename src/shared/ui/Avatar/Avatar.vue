<script setup lang="ts">
import style from './Avatar.module.scss';

interface CyrAvatarWithImage {
  image: string;
  text?: string;
}

interface CyrAvatarWithTitle {
  image?: string;
  text: string;
}

type CyrAvatarImageProps = CyrAvatarWithImage | CyrAvatarWithTitle;

const { image, text } = defineProps<CyrAvatarImageProps>();

const firstLetter = computed(() => text?.trim().charAt(0));
</script>

<template>
  <div :class="style.avatar">
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="text"
      :class="style.avatar__image"
    />
    <div v-else :class="style.avatar__text">
      <span>{{ firstLetter }}</span>
    </div>
  </div>
</template>
