<script setup lang="ts">
import { CyrQuotes } from '@shared/ui/Quotes';
</script>

<template>
  <div :class="$style.profile">
    <div :class="$style.profile__content">
      <CyrQuotes :class="$style.profile__icon" />
      <p :class="$style.profile__description">
        This space will hold your saved quotes from books.
      </p>
      <p :class="$style.profile__advice">
        While reading, highlight the quote you like and click "
        <CyrQuotes :class="$style.profile__icon_small" />" to save it.
      </p>
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
