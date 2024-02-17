<script setup lang="ts">
import { ref } from 'vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { MinusIcon } from '@heroicons/vue/24/outline';

import style from './Accordion.module.scss';

const open = ref(false);
interface AccordionProps {
  title: string;
}
defineProps<AccordionProps>();
</script>

<template>
  <div :class="style.accordion" @click="open = !open">
    <div :class="style.accordion__header">
      <h2 :class="style.accordion__title">{{ title }}</h2>
      <PlusIcon :class="style.accordion__icon" v-if="!open" />
      <MinusIcon :class="style.accordion__icon" v-else />
    </div>

    <p :class="style.accordion__content" v-if="open">
      <slot> </slot>
    </p>
  </div>
</template>
