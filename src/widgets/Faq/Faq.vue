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
      <CyrAccordion>
        <template #title> What is the Cyrille? </template>
        Cyrille is the best thing that has ever happened to you. It is a reading
        experience unlike any other. It is a place where you can read about
        anything you want, whenever you want.
      </CyrAccordion>
      <CyrAccordion>
        <template #title> How much does Cyrille cost? </template>
        Cyrille is free to use. You can read as much as you want, whenever you
        want, without any limits. You can also support Cyrille by subscribing to
        a premium plan, which gives you access to even more amazing features.
      </CyrAccordion>
      <CyrAccordion>
        <template #title> How do I cancel? </template>
        Cyrille is flexible. There are no pesky contracts and no commitments.
        You can easily cancel your account online in two clicks. There are no
        cancellation fees – start or stop your account anytime.
      </CyrAccordion>
      <CyrAccordion>
        <template #title> What is the Cyrille? </template>
        Cyrille is the best thing that has ever happened to you. It is a reading
        experience unlike any other. It is a place where you can read about
        anything you want, whenever you want.
      </CyrAccordion>
      <CyrAccordion>
        <template #title> How much does Cyrille cost? </template>
        Cyrille is free to use. You can read as much as you want, whenever you
        want, without any limits. You can also support Cyrille by subscribing to
        a premium plan, which gives you access to even more amazing features.
      </CyrAccordion>
    </div>
  </div>
</template>
