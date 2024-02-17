<script setup lang="ts">
import { CyrRhombus } from '@/components/shared/CyrRhombus';
import { Accordion } from '@/components/shared/Accordion';

import style from './Faq.module.scss';
</script>

<template>
  <div :class="style.faq">
    <h1 :class="style.faq__title">Frequently asked questions</h1>
    <div :class="style.faq__content">
      <CyrRhombus :class="style.faq__rhombus" />
      <Accordion :title="'What is the Cyrille?'"></Accordion>
      <Accordion :title="'How much does Cyrille cost?'"></Accordion>
      <Accordion :title="'How do I cancel?'">
        Cyrille is flexible. There are no pesky contracts and no commitments.
        You can easily cancel your account online in two clicks. There are no
        cancellation fees – start or stop your account anytime.
      </Accordion>
      <Accordion :title="'What is the Cyrille?'"></Accordion>
      <Accordion :title="'How much does Cyrille cost?'"></Accordion>
    </div>
  </div>
</template>
