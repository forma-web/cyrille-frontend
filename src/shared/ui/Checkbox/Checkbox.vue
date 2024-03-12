<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid';
import styles from './Checkbox.module.scss';

const model = defineModel<boolean>();
</script>

<template>
  <label :class="styles.checkbox">
    <input v-model="model" type="checkbox" :class="styles.checkbox__input">
    <span :class="styles.checkbox__box">
      <CheckIcon :class="styles.checkbox__icon" />
    </span>
    <span :class="styles.checkbox__label"><slot /></span>
  </label>
</template>
