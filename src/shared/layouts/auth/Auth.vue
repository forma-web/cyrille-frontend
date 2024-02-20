<script setup lang="ts">
import { AuthHeader } from '@widgets/Header';
import styles from './Auth.module.scss';
</script>

<template>
  <div :class="styles.layout">
    <AuthHeader />
    <main :class="styles.layout__content">
      <div :class="styles.layout__slot">
        <slot></slot>
      </div>
      <div :class="styles.layout__picture">
        <div :class="styles.layout__title">
          Joining us means joining
          <span class="accent-font">the future reading</span> realm.
        </div>
      </div>
    </main>
  </div>
</template>
