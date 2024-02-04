<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';
import style from './Button.module.scss';

type ButtonVariants = 'solid' | 'outline' | 'transparent';
type ButtonTypes = ButtonHTMLAttributes['type'];

export interface CyrButtonProps {
  variant?: ButtonVariants;
  type?: ButtonTypes;
  icon?: boolean;
  full?: boolean;
}

const {
  variant = 'solid',
  type = 'button',
  icon,
  full,
} = defineProps<CyrButtonProps>();

const buttonClasses = computed(() => ({
  [style.button_full]: full,
  [style.button_icon]: icon,
  [style[`button_${variant}`]]: true,
}));
</script>

<template>
  <button :type :class="[style.button, buttonClasses]">
    <slot></slot>
  </button>
</template>
