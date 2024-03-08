<script setup lang="ts">
import { CyrButton } from '@shared/ui/Button';
import { CyrRhombus } from '@shared/ui/Rhombus';
import { CyrField } from '@shared/ui/Input';
import { CyrTextarea } from '@shared/ui/Textarea';
import style from './ContactForm.module.scss';
</script>

<template>
  <div :class="style.form">
    <CyrRhombus />
    <CyrField name="name" label="Name" :class="style.form__input" />
    <CyrField name="email" label="Email" :class="style.form__input" />
    <CyrTextarea name="message" label="Message" :class="style.form__input" />

    <CyrButton :class="style.form__submit" variant="outline">SUBMIT</CyrButton>

    <p :class="style.form__text">
      Our team is always here to assist you and make sure you have a positive
      experience.
    </p>
  </div>

  <!-- <div :class="style.reset">
    <CyrRhombus />
    <p :class="style.reset__title">
      Thank you! Your submission has been received.
    </p>

    <CyrButton :class="style.reset__button" variant="outline">RESET</CyrButton>

    <p :class="style.reset__text">
      Our team is always here to assist you and make sure you have a positive
      experience.
    </p>
  </div> -->
</template>
