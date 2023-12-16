<script setup lang="ts">
import type { FieldProps } from '../../types';
import { CyrField, CyrPasswordFieldButton } from '..';

const props = defineProps<FieldProps>();

const passwordVisible = ref(false);
</script>

<template>
  <CyrField v-bind="props" :type="passwordVisible ? 'text' : 'password'">
    <CyrPasswordFieldButton v-model="passwordVisible" />
  </CyrField>
</template>
