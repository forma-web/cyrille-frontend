<script setup lang="ts">
import { Header } from '..';
import { Menu } from '@/components/widgets/Menu';
import { CyrButton } from '@/components/shared/CyrButton';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/vue/24/outline';
import style from './DefaultHeader.module.scss';

interface DefaultHeaderProps {
  sticky?: boolean;
}

const { sticky = true } = defineProps<DefaultHeaderProps>();
</script>

<template>
  <Header :sticky="sticky">
    <div :class="style.navbar">
      <Menu />
      <div :class="style.navbar__actions">
        <CyrButton variant="transparent">
          <MagnifyingGlassIcon :class="style.navbar__icon" />
        </CyrButton>
        <CyrButton variant="transparent">
          <UserCircleIcon :class="style.navbar__icon" />
        </CyrButton>
      </div>
    </div>
  </Header>
</template>
