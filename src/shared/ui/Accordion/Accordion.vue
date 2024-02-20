<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline';
import { MinusIcon } from '@heroicons/vue/24/outline';
import styles from './Accordion.module.scss';

const open = defineModel<boolean>('open', { default: false });
</script>

<template>
  <div :class="styles.accordion" @click="open = !open">
    <div :class="styles.accordion__header">
      <h2 :class="styles.accordion__title">
        <slot name="title"></slot>
      </h2>
      <slot name="icon">
        <PlusIcon :class="styles.accordion__icon" v-if="!open" />
        <MinusIcon :class="styles.accordion__icon" v-else />
      </slot>
    </div>
    <p :class="styles.accordion__content" v-if="open">
      <slot></slot>
    </p>
  </div>
</template>
