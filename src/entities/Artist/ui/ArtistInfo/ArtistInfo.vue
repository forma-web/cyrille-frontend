<script lang="ts">
interface ArtistInfoProps {
  image: string;
  name: string;
  caption?: string;
  bio?: string;
}
</script>

<script setup lang="ts">
import { CyrAvatar } from '@shared/ui/Avatar';
import styles from './ArtistInfo.module.scss';

const { image, caption, bio } = defineProps<ArtistInfoProps>();
</script>

<template>
  <div :class="styles.artist">
    <CyrAvatar :class="styles.artist__image" :image="image" :text="name" />
    <div>
      <h4 :class="styles.artist__name">
        {{ name }}
      </h4>
      <span v-if="caption" :class="styles.artist__caption">{{ caption }}</span>
    </div>
    <p v-if="bio" :class="styles.artist__bio">
      {{ bio }}
    </p>
  </div>
</template>
