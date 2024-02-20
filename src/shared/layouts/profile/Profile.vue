<script setup lang="ts">
import { CyrAvatar } from '@shared/ui/Avatar';
import { CyrButton } from '@shared/ui/Button';
import { CyrNavigationMenu } from '@shared/ui/NavigationMenu';
import { PROFILE_ITEMS } from '@widgets/Header/const';
import { DefaultHeader } from '@widgets/Header';
import styles from './Profile.module.scss';
</script>

<template>
  <div :class="styles.profile">
    <div :class="styles.profile__background">
      <DefaultHeader :sticky="false" class="full-light" />
    </div>
    <div :class="styles.profile__main" class="container">
      <aside :class="styles.profile__info">
        <CyrAvatar
          image="/avatars/avatar-example.png"
          text=""
          :class="styles.profile__avatar"
        />

        <div :class="styles.profile__name">Apa Kinder</div>
        <div :class="styles.profile__email">apakinder@gmail.com</div>
        <CyrButton variant="outline" :class="styles.profile__edit">
          Edit profile
        </CyrButton>
        <div :class="styles.category">
          <ul :class="styles.category__desc">
            <li :class="styles.category__item">Date of birth</li>
            <li :class="styles.category__item">Gender</li>
            <li :class="styles.category__item">About me</li>
          </ul>
          <ul :class="styles.category__value">
            <li :class="styles.category__item">21.11.2000</li>
            <li :class="styles.category__item">Female</li>
          </ul>
        </div>
        <p>
          Hello! I'm an avid online reader who enjoys a wide range of genres,
          from sci-fi to :classics. Online reading allows me to journey to
          different worlds right from my cozy corner.
        </p>
      </aside>

      <main :class="styles.profile__page">
        <CyrNavigationMenu
          :class="styles.profile__navigation"
          :items="PROFILE_ITEMS"
        />
        <slot></slot>
      </main>
    </div>
  </div>
</template>
