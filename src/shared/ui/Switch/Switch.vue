<script setup lang="ts">
import styles from './Switch.module.scss';

const model = defineModel<boolean>();
</script>

<template>
  <label :class="styles.switch">
    <span :class="styles.switch__label"><slot /></span>
    <input v-model="model" type="checkbox" :class="styles.switch__input">
    <span :class="styles.switch__box">
      <span :class="styles.switch__thumb" />
    </span>
  </label>
</template>
