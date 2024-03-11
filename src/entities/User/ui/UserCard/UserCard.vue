<script setup lang="ts">
import { CyrAvatar } from '@shared/ui/Avatar';
import styles from './UserCard.module.scss';
</script>

<template>
  <div :class="styles.card">
    <div :class="styles.header">
      <NuxtImg
        src="/backgrounds/profile-background.png"
        :class="styles.header__cover"
      />
      <div :class="styles.header__profile">
        <CyrAvatar
          image="/avatars/avatar-example.png"
          :class="styles.header__avatar"
        />
        <h6 :class="styles.header__name">Apa Kinder</h6>
        <span :class="styles.header__email">apakinder@gmail.com</span>
      </div>
    </div>
    <nav :class="styles.navigation">
      <ul :class="styles.navigation__list">
        <li :class="styles.navigation__item">123</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </div>
</template>
