<script setup lang="ts">
import AudioTriggerIcon from './AudioTriggerIcon.vue';
import VideoTriggerIcon from './VideoTriggerIcon.vue';
import EffectTriggerIcon from './EffectTriggerIcon.vue';
import PhotoTriggerIcon from './PhotoTriggerIcon.vue';

interface Props {
  name?: Boolean;
}

const { name } = defineProps<Props>();
</script>

<template>
  <div class="triggers">
    <div class="triggers__audio">
      <AudioTriggerIcon class="triggers__icon" />
      <p class="triggers__text" v-if="name">Sound immersion</p>
    </div>
    <div class="triggers__video">
      <VideoTriggerIcon class="triggers__icon" />
      <p class="triggers__text" v-if="name">Video</p>
    </div>
    <div class="triggers__effect">
      <EffectTriggerIcon class="triggers__icon" />
      <p class="triggers__text" v-if="name">Visual effect</p>
    </div>
    <div class="triggers__photo">
      <PhotoTriggerIcon class="triggers__icon" />
      <p class="triggers__text" v-if="name">Image</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.triggers {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  column-gap: 20rem;
  row-gap: 8rem;

  & svg {
    width: 4.5rem;
    height: 4.5rem;
    transition: transform var(--animation-time) ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__audio,
  &__photo {
    grid-column: 1 / 3;
  }

  &__icon {
    margin: 0 auto;
  }

  &__text {
    margin: 1.9rem 0 0 0;
    color: var(--gray50);
  }
}
</style>
