<script lang="ts">
export interface HeaderProps {
  sticky?: boolean;
}
</script>

<script setup lang="ts">
import { CyrLogo } from '@shared/ui/Logo';
import styles from './Header.module.scss';

const { sticky = false } = defineProps<HeaderProps>();
</script>

<template>
  <header :class="[styles.header, { [styles.header_sticky]: sticky }]">
    <div :class="styles.header__container" class="container">
      <NuxtLink to="/">
        <CyrLogo />
      </NuxtLink>
      <slot />
    </div>
  </header>
</template>
