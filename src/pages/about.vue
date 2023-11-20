import { CyrBookCard } from '../../.nuxt/components';
<template>
  <div class="about-page">
    <div class="about-page__author">
      <h2 class="about-page__title">author</h2>
      <CyrRhombus class="about-page__icon" />
      <img
        src="/avatar/CyrilleDessal.png"
        alt="author-avatar"
        class="about-page__author-avatar"
      />
      <p class="about-page__author-name">Cyrille D’essai</p>
    </div>

    <div class="about-page__author-info">
      <div class="about-page__subtitle">About</div>
      <p class="about-page__text-about">
        Cyrille D'essai is a talented male author known for his engaging and
        thought-provoking writing style. He has a way with words that captivates
        readers and draws them into his imaginative worlds. With a keen eye for
        detail and a gift for crafting complex characters, Cyrille's stories are
        both entertaining and insightful.
      </p>
      <p class="about-page__text-about">
        Although he is a relatively new author, he has already made a name for
        himself in the literary community and is highly respected by his peers.
        With his passion for storytelling and dedication to his craft, the
        author is poised to become a literary sensation.
      </p>
    </div>
    <div class="about-page__author-books">
      <div class="about-page__subtitle">Books</div>
      <div class="about-page__cards">
        <CyrBookCard :card-type="'full'" />
        <CyrBookCard :card-type="'cover'" />
        <CyrBookCard :card-type="'table'" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: 1fr 2fr;
  height: 100%;
  padding: 5rem;
  background-color: #040404;
  color: white;

  &__author {
    grid-row: 1 / 3;
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 57px;
    font-size: 43px;
    text-transform: uppercase;
  }

  &__icon {
    margin-bottom: 57px;
  }

  &__author-avatar {
    margin-bottom: 35px;
  }

  &__author-name {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 24px;
    font-weight: 400;
    font-style: italic;
  }

  &__author-info {
    padding: 3rem;
  }

  &__subtitle {
    margin-bottom: 39px;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }

  &__text-about {
    font-size: 16px;
    font-weight: 100;
    line-height: 19px;
    color: #d0d0d0;
  }

  &__author-books {
    padding: 3rem;
  }

  &__cards {
    display: flex;
    gap: 56px;
  }
}
</style>

<script setup lang="ts"></script>
