<script setup lang="ts">
import styles from './Popup.module.scss';
import { CyrButton } from '~/shared/ui/Button';
import { ChevronLeftIcon } from '@heroicons/vue/24/outline';

import { ref } from 'vue';

type CloseButtonTypes = 'in' | 'out';
interface CyrPopupProps {
  closeButtonType?: CloseButtonTypes;
  closeButtonText?: string;
  light?: boolean;
  dark?: boolean;
}

const { light, dark, closeButtonText, closeButtonType } =
  defineProps<CyrPopupProps>();

const overlayClasses = computed(() => ({
  [styles.popup__overlay_light]: light,
  [styles.popup__overlay_dark]: dark,
}));

const open = ref(true);
</script>

<template>
  <div :class="[styles.popup, overlayClasses]" v-if="open">
    <Teleport to="body">
      <div :class="styles.popup__content">
        <CyrButton
          :class="styles.popup__close"
          variant="transparent"
          @click="open = false"
          v-if="closeButtonType == 'in'"
        >
          <ChevronLeftIcon :class="styles.popup__icon" />
          {{ closeButtonText }}
        </CyrButton>
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>
