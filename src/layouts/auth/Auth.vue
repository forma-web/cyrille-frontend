<script setup lang="ts">
import { AuthHeader } from '@/components/widgets/Header';
import style from './Auth.module.scss';
</script>

<template>
  <div :class="style.layout">
    <AuthHeader />
    <main :class="style.layout__content">
      <div :class="style.layout__slot">
        <slot></slot>
      </div>
      <div :class="style.layout__picture">
        <div :class="style.layout__title">
          Joining us means joining
          <span class="accent-font">the future reading</span> realm.
        </div>
      </div>
    </main>
  </div>
</template>
