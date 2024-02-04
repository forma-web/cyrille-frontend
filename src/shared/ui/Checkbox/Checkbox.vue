<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid';
import style from './Checkbox.module.scss';
</script>

<template>
  <div :class="$style.checkbox">
    <label :class="$style.checkbox__label">
      <CheckIcon :class="$style.checkbox__icon" />
      <input type="checkbox" :class="$style.checkbox__input" />
    </label>
  </div>
</template>

<style module lang="scss">
.checkbox {
  width: 2rem;
  height: 2rem;
  user-select: none;

  &__label {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__icon {
    width: 100%;
    height: 100%;
    padding: 0.3rem;
    border: 1.5px solid var(--gray30);
    border-radius: 0.4rem;
  }

  &__input {
    position: absolute;
    width: 0;
    height: 0;
  }

  &__input:checked + &__icon {
    background-color: var(--accent-color);
  }
}
</style>
