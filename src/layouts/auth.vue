<script setup lang="ts"></script>

<template>
  <div class="auth-layout">
    <AuthHeader />

    <div class="auth-layout__content">
      <div class="auth-layout__slot">
        <slot></slot>
      </div>

      <div class="auth-layout__picture">
        <div class="auth-layout__title">
          Joining us means joining
          <span class="accent-font">the future reading</span> realm.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-layout {
  height: 100%;

  &__content {
    display: flex;
    height: 100%;
  }

  &__slot {
    flex: 1;
  }

  &__picture {
    display: flex;
    align-items: flex-end;
    flex: 1;

    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(/backgrounds/auth.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 3.125rem 0 0 3.125rem;

    color: white;
    font-size: 5rem;
    font-weight: 200;
    text-align: center;
  }

  &__title {
    padding: 15%;
  }
}
</style>
