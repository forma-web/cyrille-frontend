<script setup lang="ts">
import { CyrCheckbox } from '@shared/ui/Checkbox';
</script>

<template>
  <div :class="$style.library">
    <h2 :class="$style.library__header">Library</h2>
    <div></div>
    <aside :class="$style.library__filters">
      <CyrCheckbox />
    </aside>
    <NuxtPage />
  </div>
</template>

<style module lang="scss">
.library {
  padding: 0 var(--header-padding) 0 var(--header-padding);
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr auto;
  gap: var(--base-gap);

  &__header {
    margin: 0;
    text-transform: uppercase;
  }

  &__filters {
    border-right: 1.5px solid var(--gray30);
  }
}
</style>
