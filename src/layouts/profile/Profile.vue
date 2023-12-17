<script setup lang="ts">
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
        <div :class="style.profile__category">
          <ul :class="style.profile__categoryDesc">
            <li :class="style.profile__categoryItem">Date of birth</li>
            <li :class="style.profile__categoryItem">Gender</li>
            <li :class="style.profile__categoryItem">About me</li>
          </ul>
          <ul :class="style.profile__categoryValue">
            <li :class="style.profile__categoryItem">21.11.2000</li>
            <li :class="style.profile__categoryItem">Female</li>
          </ul>
        </div>
        <p>
          Hello! I'm an avid online reader who enjoys a wide range of genres,
          from sci-fi to :classics. Online reading allows me to journey to
          different worlds right from my cozy corner.
        </p>
      </div>

      <div :class="style.profile__page">
        <CyrTabs />
        <slot></slot>
      </div>
    </div>
  </main>
</template>
