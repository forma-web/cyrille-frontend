<script setup lang="ts">
import { ref } from 'vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { MinusIcon } from '@heroicons/vue/24/outline';

import styles from './Accordion.module.scss';

const open = ref(false);

interface AccordionProps {
  title: string;
}

const { title } = defineProps<AccordionProps>();
</script>

<template>
  <div :class="styles.accordion" @click="open = !open">
    <div :class="styles.accordion__header">
      <h2 :class="styles.accordion__title">{{ title }}</h2>
      <PlusIcon :class="styles.accordion__icon" v-if="!open" />
      <MinusIcon :class="styles.accordion__icon" v-else />
    </div>

    <p :class="styles.accordion__content" v-if="open">
      <slot> </slot>
    </p>
  </div>
</template>
