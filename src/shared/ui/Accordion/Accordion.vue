<script setup lang="ts">
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline';

import styles from './Accordion.module.scss';

const open = defineModel<boolean>('open', { default: false });
</script>

<template>
  <div :class="styles.accordion" @click="open = !open">
    <div :class="styles.accordion__header">
      <h2 :class="styles.accordion__title">
        <slot name="title" />
      </h2>
      <slot name="icon">
        <PlusIcon v-if="!open" :class="styles.accordion__icon" />
        <MinusIcon v-else :class="styles.accordion__icon" />
      </slot>
    </div>
    <p v-if="open" :class="styles.accordion__content">
      <slot />
    </p>
  </div>
</template>
