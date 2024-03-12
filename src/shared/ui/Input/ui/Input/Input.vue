<script setup lang="ts">
import styles from './Input.module.scss';

const model = defineModel<string>();
</script>

<template>
  <input v-model="model" :class="styles.input">
</template>
