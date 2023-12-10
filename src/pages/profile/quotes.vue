<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/outline';

definePageMeta({
  layout: 'profile',
});
</script>

<template>
  <Profile>
    <div :class="$style.profilePage">
      <div :class="$style.profilePage__content">
        <CyrQuotes :class="$style.profilePage__icon" />
        <p :class="$style.profilePage__description">
          This space will hold your saved quotes from books.
        </p>
        <p :class="$style.profilePage__advice">
          While reading, highlight the quote you like and click "<CyrQuotes
            :class="$style.profilePage__icon_small"
          />" to save it.
        </p>
      </div>
    </div>
  </Profile>
</template>

<style lang="scss" module>
.profilePage {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    margin-top: -15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__icon {
    width: 5.6rem;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 3.7rem;

    &_small {
      display: inline;
      width: 2.2rem;
    }
  }

  &__description {
    margin: 0;
    font-size: 2.4rem;
  }

  &__advice {
    width: 38rem;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 3.7rem;
  }
}
</style>
