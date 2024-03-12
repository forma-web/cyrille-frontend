<script lang="ts">
interface CyrAvatarWithImage {
  image: string;
  text?: string;
}

interface CyrAvatarWithTitle {
  image?: string;
  text: string;
}

type CyrAvatarImageProps = CyrAvatarWithImage | CyrAvatarWithTitle;
</script>

<script setup lang="ts">
import styles from './Avatar.module.scss';

const { image, text } = defineProps<CyrAvatarImageProps>();

const firstLetter = computed(() => text?.trim().charAt(0));
</script>

<template>
  <div :class="styles.avatar">
    <NuxtImg
      v-if="image"
      :src="image"
      :alt="text"
      :class="styles.avatar__image"
    />
    <div v-else :class="styles.avatar__text">
      <span>{{ firstLetter }}</span>
    </div>
  </div>
</template>
