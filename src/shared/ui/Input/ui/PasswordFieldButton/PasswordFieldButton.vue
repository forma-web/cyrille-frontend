<script setup lang="ts">
import { CyrButton } from '../../../Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

const visibility = defineModel<boolean>();
</script>

<template>
  <CyrButton
    variant="transparent"
    :class="$style.icon"
    @click="visibility = !visibility"
  >
    <EyeIcon v-if="visibility" />
    <EyeSlashIcon v-else />
  </CyrButton>
</template>

<style module lang="scss">
.icon {
  color: var(--gray50);
}
</style>
