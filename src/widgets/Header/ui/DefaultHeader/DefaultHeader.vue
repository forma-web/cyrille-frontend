<script setup lang="ts">
import { Header } from '..';
import { MENU_ITEMS } from '../../const';
import { CyrNavigationMenu } from '@shared/ui/NavigationMenu';
import { CyrButton } from '@shared/ui/Button';
import { Search } from '@features/Search';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import styles from './DefaultHeader.module.scss';

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
    <div :class="styles.navbar">
      <CyrNavigationMenu :items="MENU_ITEMS" />
      <div :class="styles.navbar__actions">
        <CyrButton variant="transparent" @click="toggleOverlay">
          <MagnifyingGlassIcon :class="styles.navbar__icon" />
        </CyrButton>
        <CyrButton variant="transparent" @click="openProfile">
          <UserCircleIcon :class="styles.navbar__icon" />
        </CyrButton>
      </div>
    </div>
    <Transition name="fade">
      <div :class="styles.overlay" v-if="overlay" @click.self="toggleOverlay">
        <div :class="styles.overlay__card">
          <div :class="styles.overlay__content">
            <Search />
          </div>
        </div>
      </div>
    </Transition>
  </Header>
</template>
