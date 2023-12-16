<template>
  <svg
    :class="$style.rhombus"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M0 256 256 0l256 256-256 256z" />
  </svg>
</template>

<style module lang="scss">
.rhombus {
  width: 1.5rem;
  fill: var(--primary-text-color);
}
</style>
