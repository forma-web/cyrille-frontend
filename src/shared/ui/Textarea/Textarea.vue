<script setup lang="ts">
import style from './Textarea.module.scss';

interface TextareaProps {
  label?: string;
}

const { label } = defineProps<TextareaProps>();
</script>

<template>
  <textarea :class="style.textarea" :placeholder="label"></textarea>
</template>
