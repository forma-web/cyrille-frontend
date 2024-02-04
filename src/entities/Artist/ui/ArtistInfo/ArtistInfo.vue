<script setup lang="ts">
import { CyrAvatar } from '@shared/ui/Avatar';
import style from './ArtistInfo.module.scss';

interface ArtistInfoProps {
  image: string;
  name: string;
  caption?: string;
  bio?: string;
}

const { image, caption, bio } = defineProps<ArtistInfoProps>();
</script>

<template>
  <div :class="style.artist">
    <CyrAvatar :class="style.artist__image" :image="image" :text="name" />
    <div>
      <h4 :class="style.artist__name">{{ name }}</h4>
      <span :class="style.artist__caption" v-if="caption">{{ caption }}</span>
    </div>
    <p :class="style.artist__bio" v-if="bio">{{ bio }}</p>
  </div>
</template>
