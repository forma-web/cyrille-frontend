<script setup lang="ts">
import { CyrCarousel } from '@shared/ui/Carousel';
import HeadingSection from '@widgets/Landing/HeadingSection.vue';
import ImageCardSection from '@widgets/Landing/ImageCardSection.vue';
import HeadlessSection from '@widgets/Landing/HeadlessSection.vue';
import TriggersDemo from '@features/Triggers/TriggersDemo.vue';

const genres = [
  {
    name: 'Fantasy',
    image: '/genres/fantasy.png',
  },
  {
    name: 'Horror',
    image: '/genres/horror.png',
  },
  {
    name: 'Mystery',
    image: '/genres/mystery.png',
  },
  {
    name: 'Romance',
    image: '/genres/romance.png',
  },
  {
    name: 'Science Fiction',
    image: '/genres/science-fiction.png',
  },
  {
    name: 'Thriller',
    image: '/genres/thriller.png',
  },
  {
    name: 'Fantasy',
    image: '/genres/fantasy.png',
  },
  {
    name: 'Horror',
    image: '/genres/horror.png',
  },
  {
    name: 'Mystery',
    image: '/genres/mystery.png',
  },
  {
    name: 'Romance',
    image: '/genres/romance.png',
  },
  {
    name: 'Science Fiction',
    image: '/genres/science-fiction.png',
  },
  {
    name: 'Thriller',
    image: '/genres/thriller.png',
  },
];
</script>

<template>
  <div>
    <HeadingSection>
      <template #heading>
        The <span class="accent-font">interactive e-book</span>
        you'll be in love with.
      </template>
      <template #description>
        Cyrille is a digital book platform that represents a new vision of
        combining literature with different art forms and techniques.
      </template>
    </HeadingSection>
    <ImageCardSection background="/backgrounds/landing-girl.jpg" />
    <HeadingSection>
      <template #heading>
        While reading, you will come across
        <span class="accent-font">special triggers.</span> By clicking on them,
        you will see additional content.
      </template>
      <template #description>
        Enjoy videos, images, sounds, or visual effects that appear. Close them
        to return to your reading.
      </template>
    </HeadingSection>
    <HeadlessSection>
      <TriggersDemo />
    </HeadlessSection>
    <HeadlessSection>
      <CyrCarousel :items="genres">
        <template v-slot="{ item }">
          {{ item.name }}
        </template>
      </CyrCarousel>
    </HeadlessSection>
    <ImageCardSection background="/backgrounds/landing-explore.png" />
  </div>
</template>
