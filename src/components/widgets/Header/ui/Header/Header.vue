<script setup lang="ts">
import { CyrLogo } from '@/components/shared/Logo';
import style from './Header.module.scss';

export interface HeaderProps {
  sticky?: boolean;
}

const { sticky = false } = defineProps<HeaderProps>();
</script>

<template>
  <header :class="[style.header, { [style.header_sticky]: sticky }]">
    <div :class="style.header__container">
      <NuxtLink to="/">
        <CyrLogo />
      </NuxtLink>
      <slot></slot>
    </div>
  </header>
</template>
