<script setup lang="ts">
import { PROFILE_ITEMS } from '@/components/shared/CyrTabs/const';
import style from './Profile.module.scss';
</script>

<template>
  <main :class="style.profile">
    <div :class="style.profile__background"></div>
    <div :class="style.profile__main">
      <div :class="style.profile__info">
        <CyrAvatar
          image="/avatar/avatar-example.png"
          text=""
          :class="style.profile__avatar"
        />

        <div :class="style.profile__name">Apa Kinder</div>
        <div :class="style.profile__email">apakinder@gmail.com</div>
        <CyrButton variant="outline" :class="style.profile__edit"
          >Edit profile</CyrButton
        >
        <div :class="style.category">
          <ul :class="style.category__desc">
            <li :class="style.category__item">Date of birth</li>
            <li :class="style.category__item">Gender</li>
            <li :class="style.category__item">About me</li>
          </ul>
          <ul :class="style.category__value">
            <li :class="style.category__item">21.11.2000</li>
            <li :class="style.category__item">Female</li>
          </ul>
        </div>
        <p>
          Hello! I'm an avid online reader who enjoys a wide range of genres,
          from sci-fi to :classics. Online reading allows me to journey to
          different worlds right from my cozy corner.
        </p>
      </div>

      <div :class="style.profile__page">
        <CyrTabs :items="PROFILE_ITEMS" />
        <slot></slot>
      </div>
    </div>
  </main>
</template>
