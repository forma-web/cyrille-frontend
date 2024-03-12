<script setup lang="ts">
import styles from './Guide.module.scss';
import Popup from '~/shared/ui/Popup/Popup.vue';
import { ChevronLeftIcon } from '@heroicons/vue/24/outline';
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref } from 'vue';
import { Illustarions, Manual, Triggers } from '../Slides';
const carousel = ref();

const slides = [
  { component: Illustarions, name: 'illustarions' },
  { component: Manual, name: 'manual' },
  { component: Triggers, name: 'triggers' },
];
</script>

<template>
  <Popup light closeButtonType="in" closeButtonText="back to reading">
    <div :class="styles.manual">
      <div :class="styles.manual__content">
        <button @click="carousel.prev" :class="styles.manual__switching">
          <ChevronLeftIcon />
        </button>

        <Carousel ref="carousel" :class="styles.manual__carousel">
          <Slide v-for="slide in slides" :key="slide.name">
            <component :is="slide.component" />
          </Slide>

          <template #addons>
            <Pagination :class="styles.manual__pagination" />
          </template>
        </Carousel>

        <button @click="carousel.next" :class="styles.manual__switching">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  </Popup>
</template>
