<script setup lang="ts"></script>

<template>
  <NuxtLink to="$props" :class="$style.tab" :active-class="$style.tab_active">
    <slot></slot>
  </NuxtLink>
</template>

<style lang="scss" module>
.tab {
  color: var(--gray50);
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  text-decoration-thickness: 0.15rem;
  text-decoration-color: transparent;

  transition: text-decoration-color var(--animation-time);

  &_active {
    color: black;
    font-weight: 700;
    text-decoration-color: var(--primary-text-color);
  }
}
</style>
