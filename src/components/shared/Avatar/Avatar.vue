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
    <img :src="image" :alt="text" :class="style.avatar__image" v-if="image" />
    <div :class="style.avatar__text" v-else>
      <span>{{ firstLetter }}</span>
    </div>
  </div>
</template>
