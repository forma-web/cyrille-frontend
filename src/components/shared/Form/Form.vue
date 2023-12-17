<script setup lang="ts">
import style from './Form.module.scss';
</script>

<template>
  <form :class="style.form">
    <div :class="style.form__content">
      <slot />
    </div>
    <div :class="style.form__buttons">
      <slot name="buttons" />
    </div>
    <div :class="style.form__footer">
      <slot name="footer" />
    </div>
  </form>
</template>
