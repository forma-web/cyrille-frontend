<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="block__auth">
      <CyrLogo />
      <slot></slot>
    </div>

    <div class="block__layout">
      <p class="layout__title">
        Joining us means joining
        <span class="italic">the future reading</span> realm.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');

.wrapper {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.block__auth {
  width: 50%;
  height: 100%;
  padding: 2%;
}

.block__layout {
  width: 50%;
  height: 100%;
  background-image: url(../public/backgrounds/auth.png);
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 3.125rem 0 0 3.125rem;

  display: flex;
  align-items: flex-end;
}

.layout__title {
  width: 100%;
  font-family: 'SF Pro Display', sans-serif;
  color: white;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  padding: 15%;

  text-align: center;
  font-size: 4rem;
  font-weight: 200;
}

.italic {
  font-family: Georgia;
  font-style: italic;
}
</style>
