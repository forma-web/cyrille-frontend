<script setup lang="ts">
import styles from './Manual.module.scss';
</script>

<template>
  <div :class="styles.manual">
    <img src="./Group.png" alt="sda" :class="styles.manual__image" />
    <p :class="styles.manual__text">
      While reading you will come across special triggers. By clicking on them
      you will see additional content.
    </p>
  </div>
</template>
