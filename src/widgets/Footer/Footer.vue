<script setup lang="ts">
import { CyrButton } from '@shared/ui/Button';
import { CyrLogo } from '@shared/ui/Logo';
import { CyrRhombus } from '@shared/ui/Rhombus';
import { ScrollButton } from '@features/ScrollButton';
import styles from './Footer.module.scss';
</script>

<template>
  <footer class="dark" :class="styles.footer">
    <div :class="styles.footer__rhombus">
      <CyrRhombus />
    </div>
    <div :class="styles.footer__container">
      <CyrLogo :class="styles.footer__logo" />
      <ScrollButton
        direction="up"
        class="accent-font"
        :class="styles.footer__scroll"
      />
      <CyrButton
        variant="transparent"
        class="accent-font"
        :class="styles.footer__subscribe"
      >
        Subscribe to newsletters
      </CyrButton>
      <CyrButton variant="outline" :class="styles.footer__app">
        Download app
      </CyrButton>
    </div>
  </footer>
</template>
