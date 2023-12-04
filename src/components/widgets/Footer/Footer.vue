<script setup lang="ts">
import { CyrButton } from '@/components/shared/CyrButton';
import { CyrLogo } from '@/components/shared/CyrLogo';
import { CyrRhombus } from '@/components/shared/CyrRhombus';
import { ScrollButton } from '@/components/features/ScrollButton';

import style from './Footer.module.scss';
</script>

<template>
  <footer class="dark" :class="style.footer">
    <div :class="style.footer__rhombus">
      <CyrRhombus />
    </div>
    <div :class="style.footer__container">
      <CyrLogo :class="style.footer__logo" />
      <ScrollButton
        direction="up"
        class="accent-font"
        :class="style.footer__scroll"
      />
      <CyrButton
        variant="transparent"
        class="accent-font"
        :class="style.footer__subscribe"
      >
        Subscribe to newsletters
      </CyrButton>
      <CyrButton variant="outline" :class="style.footer__app">
        Download app
      </CyrButton>
    </div>
  </footer>
</template>
