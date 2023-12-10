<script setup lang="ts">
import { TAB_ITEMS } from '../../const';
</script>

<template>
  <div>
    <ul :class="$style.tabs">
      <li v-for="item in TAB_ITEMS" key="item.name">
        <CyrTab :to="item.location">
          {{ item.name }}
        </CyrTab>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.tabs {
  display: flex;
  justify-content: space-around;

  list-style: none;
  color: black;
}
</style>
