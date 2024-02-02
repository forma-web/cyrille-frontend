<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div :class="$style.profile">
    <div :class="$style.profile__content">
      <HeartIcon :class="$style.profile__icon" />
      <p :class="$style.profile__description">
        This space will hold your favourite books.
      </p>
      <p :class="$style.profile__advice">
        To add a book to your favorites for future reference or purchase, click
        " <HeartIcon :class="$style.profile__icon_small" /> " next to it.
      </p>
      <button :class="$style.profile__button">Explore books</button>
    </div>
  </div>
</template>

<style lang="scss" module>
.profile {
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
    stroke-width: 1px;
    margin-bottom: 3.7rem;

    &_small {
      display: inline;
      width: 16px;
    }
  }

  &__description {
    margin: 0;
    font-size: 2.4rem;
  }

  &__advice {
    width: 38rem;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 37px;
  }

  &__button {
    padding: 1.7rem 6rem;
    border-radius: 5.5rem;
    background-color: black;
    color: white;
    text-transform: uppercase;
    border: none;
  }
}
</style>
