<script setup lang="ts">
import { ContactForm } from '@features/ContactForm';
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';
import { CyrButton } from '@shared/ui/Button';
import ImageCardSection from '@widgets/Landing/ImageCardSection.vue';
import style from './Contact.module.scss';

import { ref } from 'vue';
const form = ref(false);

function toggleForm() {
  form.value = !form.value;
}
</script>

<template>
  <div :class="style.contact">
    <div :class="style.contact__header">
      <h1 :class="style.contact__title" v-if="!form">get in touch</h1>
      <h1 :class="style.contact__title" v-else>Contact</h1>
      <div :class="style.contact__description">
        <p :class="style.contact__text">
          If you encounter any issues while using our e-book application or have
          any questions,
          <span :class="style.contact__text_accent"
            >please feel free to fill out the form below</span
          >
          and we'll get back to you as soon as possible.
        </p>

        <CyrButton
          variant="outline"
          :class="style.contact__button"
          v-if="!form"
          @click="toggleForm"
          >Contact
          <ArrowUpRightIcon :class="style.contact__arrow" />
        </CyrButton>
      </div>
    </div>
    <ImageCardSection :background="'backgrounds/people.png'">
      <div :class="style.contact__background" v-if="form">
        <ContactForm />
        <button :class="style.contact__close" @click="toggleForm">close</button>
      </div>
    </ImageCardSection>
  </div>
</template>
