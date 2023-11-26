<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

export type ButtonVariants = 'solid' | 'outline' | 'transparent';
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
  button_full: full,
  button_icon: icon,
  [`button_${variant}`]: true,
}));
</script>

<template>
  <button class="button" :class="buttonClasses" :type="type">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  padding: 1.5rem 2.4rem;
  border-radius: 10rem;
  border: none;

  text-transform: uppercase;

  cursor: pointer;

  &_full {
    width: 100%;
  }

  &_icon {
    padding: 1.5rem;
    border-radius: 50%;
  }

  // Variants

  &_solid {
    color: var(--secondary-text-color);
    background-color: var(--secondary-background-color);

    &:disabled {
      background-color: var(--gray30);
      color: var(--gray50);
    }
  }

  &_outline {
    color: var(--secondary-text-color);
    background-color: transparent;
    border: 1px solid var(--secondary-text-color);

    &:disabled {
      color: var(--gray50);
      border-color: var(--gray50);
    }
  }

  &_transparent {
    color: var(--secondary-text-color);
    background-color: transparent;

    padding: 0;
    border-radius: 0;

    &:disabled {
      color: var(--gray50);
    }
  }
}
</style>
