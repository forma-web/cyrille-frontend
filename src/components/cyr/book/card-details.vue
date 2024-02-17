<script setup lang="ts">
import { ref } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid';

const isHeartSolid = ref(false);
const toggleHeartIcon = () => {
  isHeartSolid.value = !isHeartSolid.value;
};
</script>

<template>
  <div class="card-rating">
    <CyrRhombus />
    4.8
    <HeartIcon
      v-if="!isHeartSolid"
      @click="toggleHeartIcon"
      class="card-rating__heart-icon"
    />
    <HeartIconSolid
      v-else
      @click="toggleHeartIcon"
      class="card-rating__heart-icon"
    />
  </div>
</template>

<style lang="scss" scoped>
.card-rating {
  display: flex;
  margin-top: 18px;
  margin-bottom: 19px;
  gap: 5px;
  color: rgb(159, 159, 159);

  &__heart-icon {
    width: 19px;
    margin-left: auto;
    cursor: pointer;
    color: white;
  }
}
</style>
