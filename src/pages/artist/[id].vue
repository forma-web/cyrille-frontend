<script setup lang="ts">
import { CyrRhombus } from '@shared/ui/Rhombus';
import { ArtistInfo } from '@entities/Artist';

definePageMeta({
  darkMode: true,
});
</script>

<template>
  <div :class="$style.artist">
    <div :class="$style.artist__profile">
      <h2>Author</h2>
      <CyrRhombus />
      <ArtistInfo
        class="accent-font"
        image="/avatar/CyrilleDessal.png"
        name="Cyrille D’essai"
      />
    </div>
    <div :class="$style.artist__info">
      <h4>About</h4>
      <p>
        Cyrille D'essai is a talented male author known for his engaging and
        thought-provoking writing style. He has a way with words that captivates
        readers and draws them into his imaginative worlds. With a keen eye for
        detail and a gift for crafting complex characters, Cyrille's stories are
        both entertaining and insightful.
      </p>
      <p>
        Although he is a relatively new author, he has already made a name for
        himself in the literary community and is highly respected by his peers.
        With his passion for storytelling and dedication to his craft, the
        author is poised to become a literary sensation.
      </p>
    </div>
    <div :class="$style.artist__info">
      <h4>Books</h4>
      <div :class="$style.artist__cards">
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
        <CyrBookCard card-type="full" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.artist {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  row-gap: var(--base-gap);
  padding: 5rem;

  &__profile {
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    h2 {
      margin: 0;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  &__info {
    h4 {
      margin-top: 0;
      text-transform: uppercase;
    }

    p {
      color: var(--gray30);
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    gap: 5.5rem;
  }
}
</style>
