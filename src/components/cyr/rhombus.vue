<template>
  <div class="rhombus">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M0 256 256 0l256 256-256 256z" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.rhombus {
  position: relative;
  aspect-ratio: 1;
  width: 1em;

  .rhombus__fill,
  svg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    user-select: none;
    width: 1em;
    height: 1em;
    fill: currentColor;
  }

  .rhombus__fill {
    overflow: hidden;
  }
}
</style>
