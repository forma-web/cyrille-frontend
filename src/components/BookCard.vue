<template>
  <div>
    <div class="book-card">
      <img src="/images/1.png" alt="book-avatar" class="book-card__image" />
      <div class="book-card__rating">
        <CyrRhombus />
        4.8
        <HeartIcon
          v-if="!isHeartSolid"
          @click="toggleHeartIcon"
          class="book-card__icon"
        />
        <HeartIconSolid
          v-else
          @click="toggleHeartIcon"
          class="book-card__icon"
        />
      </div>
      <div class="book-card__name">Albergue</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book-card {
  width: 114px;
  &__image {
    width: 114px;
    border-radius: 10px;
  }
  &__rating {
    display: flex;
    margin-top: 18px;
    margin-bottom: 19px;
    gap: 5px;
    color: rgb(159, 159, 159);
  }
  &__icon {
    width: 19px;
    margin-left: auto;
    cursor: pointer;
    color: white;
  }

  &__name {
    color: #fafafa;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid';

const isHeartSolid = ref(false);
const toggleHeartIcon = () => {
  isHeartSolid.value = !isHeartSolid.value;
};
</script>
