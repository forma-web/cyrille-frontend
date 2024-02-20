<script setup lang="ts">
import { CyrLogo } from '@shared/ui/Logo';
import styles from './Header.module.scss';

export interface HeaderProps {
  sticky?: boolean;
}

const { sticky = false } = defineProps<HeaderProps>();
</script>

<template>
  <header :class="[styles.header, { [styles.header_sticky]: sticky }]">
    <div :class="styles.header__container" class="container">
      <NuxtLink to="/">
        <CyrLogo />
      </NuxtLink>
      <slot></slot>
    </div>
  </header>
</template>
