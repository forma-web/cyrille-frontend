<script setup lang="ts">
import styles from './Triggers.module.scss';
import TriggersDemo from '@features/Triggers/TriggersDemo.vue';
</script>

<template>
  <div :class="styles.triggers">
    <TriggersDemo :name="true" />
    <p :class="styles.triggers__text">
      Enjoy videos, images, sounds, or visual effects that appear. Close them to
      return to your reading.
    </p>
  </div>
</template>
