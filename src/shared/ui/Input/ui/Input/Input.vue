<script setup lang="ts">
import style from './Input.module.scss';

const model = defineModel<string>();
</script>

<template>
  <input :class="style.input" v-model="model" />
</template>
