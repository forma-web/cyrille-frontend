<script setup lang="ts">
import styles from './Rhombus.module.scss';

interface RhombusProps {
  filled?: number;
}

const { filled = 1 } = defineProps<RhombusProps>();
</script>

<template>
  <div :class="styles.rhombus">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256,0,0,256,256,512,512,256ZM35.6736,256,256,35.6736,476.3264,256,256,476.3264Z"
      />
    </svg>
    <span
      :class="styles.rhombus__filled"
      :style="{ width: `${filled * 100}%` }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 256 256 0l256 256-256 256z" />
      </svg>
    </span>
  </div>
</template>
