<script setup lang="ts">
import { Header } from '..';
import { Menu } from '@/components/widgets/Menu';
import { CyrButton } from '@/components/shared/Button';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import style from './DefaultHeader.module.scss';
import { MENU_ITEMS } from '@/components/shared/CyrTabs/const/index';

interface DefaultHeaderProps {
  sticky?: boolean;
}

const { sticky = true } = defineProps<DefaultHeaderProps>();

const overlay = ref(false);

const toggleOverlay = () => {
  overlay.value = !overlay.value;
};

const openProfile = async () => {
  await navigateTo('/auth/login');
};
</script>

<template>
  <Header :sticky="sticky">
    <div :class="style.navbar">
      <!-- <Menu /> -->
      <CyrTabs :items="MENU_ITEMS" />
      <div :class="style.navbar__actions">
        <CyrButton variant="transparent" @click="toggleOverlay">
          <MagnifyingGlassIcon :class="style.navbar__icon" />
        </CyrButton>
        <CyrButton variant="transparent" @click="openProfile">
          <UserCircleIcon :class="style.navbar__icon" />
        </CyrButton>
      </div>
    </div>
    <Transition name="fade">
      <div :class="style.overlay" v-if="overlay">
        <div :class="style.overlay__content">
          <!-- search -->
        </div>
      </div>
    </Transition>
  </Header>
</template>
