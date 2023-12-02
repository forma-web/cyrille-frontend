<script setup lang="ts">
import { MENU_ITEMS } from '../../const';
import style from './Menu.module.scss';
</script>

<template>
  <nav>
    <ul :class="style.menu">
      <li v-for="item in MENU_ITEMS" :key="item.name" :class="style.menu__item">
        <NuxtLink
          :to="item.location"
          :class="style.menu__link"
          :active-class="style.menu__link_active"
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
