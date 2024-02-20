<script setup lang="ts">
import { CyrRhombus } from '@shared/ui/Rhombus';
import { CyrAccordion } from '@shared/ui/Accordion';

import styles from './Faq.module.scss';
</script>

<template>
  <div :class="styles.faq">
    <h1 :class="styles.faq__title">Frequently asked questions</h1>
    <div :class="styles.faq__content">
      <CyrRhombus :class="styles.faq__rhombus" />
      <CyrAccordion title="What is the Cyrille?"></CyrAccordion>
      <CyrAccordion title="How much does Cyrille cost?"></CyrAccordion>
      <CyrAccordion title="How do I cancel?">
        Cyrille is flexible. There are no pesky contracts and no commitments.
        You can easily cancel your account online in two clicks. There are no
        cancellation fees – start or stop your account anytime.
      </CyrAccordion>
      <CyrAccordion title="What is the Cyrille?"></CyrAccordion>
      <CyrAccordion title="How much does Cyrille cost?"></CyrAccordion>
    </div>
  </div>
</template>
