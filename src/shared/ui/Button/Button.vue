<script lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

type ButtonVariants = 'solid' | 'outline' | 'transparent';
type ButtonTypes = ButtonHTMLAttributes['type'];

export interface CyrButtonProps {
  variant?: ButtonVariants;
  type?: ButtonTypes;
  icon?: boolean;
  full?: boolean;
}
</script>

<script setup lang="ts">
import styles from './Button.module.scss';

const {
  variant = 'solid',
  type = 'button',
  icon,
  full,
} = defineProps<CyrButtonProps>();

const buttonClasses = computed(() => ({
  [styles.button_full]: full,
  [styles.button_icon]: icon,
  [styles[`button_${variant}`]]: true,
}));
</script>

<template>
  <button :type :class="[styles.button, buttonClasses]">
    <slot />
  </button>
</template>
