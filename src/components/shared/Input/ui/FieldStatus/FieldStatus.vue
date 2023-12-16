<script setup lang="ts">
import { CheckIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline';

interface FieldStatusProps {
  isValid: boolean;
}

const { isValid } = defineProps<FieldStatusProps>();
</script>

<template>
  <CheckIcon v-if="isValid" />
  <ExclamationCircleIcon v-else />
</template>
