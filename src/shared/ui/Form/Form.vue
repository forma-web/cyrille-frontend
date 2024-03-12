<script setup lang="ts">
import styles from './Form.module.scss';
</script>

<template>
  <form :class="styles.form">
    <div :class="styles.form__content">
      <slot />
    </div>
    <div v-if="$slots.buttons" :class="styles.form__buttons">
      <slot name="buttons" />
    </div>
    <div v-if="$slots.footer" :class="styles.form__footer">
      <slot name="footer" />
    </div>
  </form>
</template>
