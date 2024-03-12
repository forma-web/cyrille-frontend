<script lang="ts">
interface DefaultHeaderProps {
  sticky?: boolean;
}
</script>

<script setup lang="ts">
import { CyrNavigationMenu } from '@shared/ui/NavigationMenu';
import { CyrButton } from '@shared/ui/Button';
import { Search } from '@features/Search';
import { UserCard } from '@entities/User';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import { MENU_ITEMS } from '../../const';
import { Header } from '..';
import styles from './DefaultHeader.module.scss';

const { sticky = true } = defineProps<DefaultHeaderProps>();

const searchOverlay = ref(false);
const profileOverlay = ref(false);

function toggleSearchOverlay() {
  searchOverlay.value = !searchOverlay.value;
}

async function toggleProfileOverlay() {
  profileOverlay.value = !profileOverlay.value;
}
</script>

<template>
  <Header :sticky="sticky">
    <div :class="styles.navbar">
      <CyrNavigationMenu :items="MENU_ITEMS" />
      <div :class="styles.navbar__actions">
        <CyrButton variant="transparent" @click="toggleSearchOverlay">
          <MagnifyingGlassIcon :class="styles.navbar__icon" />
        </CyrButton>
        <CyrButton variant="transparent" @click="toggleProfileOverlay">
          <UserCircleIcon :class="styles.navbar__icon" />
        </CyrButton>
      </div>
    </div>
    <!-- TODO: transition components, fullscreen profile overlay -->
    <Transition name="fade">
      <div
        v-if="searchOverlay"
        :class="styles.overlay"
        @click.self="toggleSearchOverlay"
      >
        <div :class="styles.overlay__card">
          <div :class="styles.overlay__content">
            <Search />
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div
        v-if="profileOverlay"
        :class="styles.overlay"
        @click.self="toggleProfileOverlay"
      >
        <div :class="styles.overlay__profile" class="container">
          <UserCard />
        </div>
      </div>
    </Transition>
  </Header>
</template>
