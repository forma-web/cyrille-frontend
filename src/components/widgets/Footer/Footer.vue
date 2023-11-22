<template>
  <footer class="footer">
    <div class="footer__rhombus">
      <CyrRhombus />
    </div>
    <div class="footer__container">
      <CyrLogo class="footer__logo" />
      <ScrollTopButton class="footer__scroll" />
      <CyrButton variant="transparent" class="footer__subscribe accent-font">
        Subscribe to newsletters
      </CyrButton>
      <CyrButton
        variant="outline"
        style="border-color: white; color: white"
        class="footer__app"
      >
        Download app
      </CyrButton>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 50rem;
  padding: 6rem 4rem 4rem 4rem;
  border-radius: var(--rounding) var(--rounding) 0 0;

  position: relative;

  background-color: var(--black-color);

  &__rhombus {
    position: absolute;
    top: calc(50% - 0.75rem);
    left: calc(50% - 0.75rem);
  }

  &__container {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  &__logo {
    width: 18rem;
    color: white;
  }

  &__scroll {
    align-self: start;
    justify-self: end;
  }

  &__subscribe {
    color: white;
    text-transform: none;
    align-self: end;
    justify-self: start;
  }

  &__app {
    align-self: end;
    justify-self: end;
  }
}
</style>
<script setup lang="ts"></script>
