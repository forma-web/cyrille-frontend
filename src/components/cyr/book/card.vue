<script setup lang="ts">
type BookCardVariants = 'full' | 'cover' | 'table';
interface BookCardProps {
  cardType: BookCardVariants;
}
defineProps<BookCardProps>();
</script>

<template>
  <div v-if="cardType === 'full'">
    <CyrBookCardCover />
    <CyrBookCardDetails />
    <CyrBookCardTitle />
  </div>

  <div v-else-if="cardType === 'cover'">
    <CyrBookCardCover />
  </div>

  <div class="card-table" v-else-if="cardType === 'table'">
    <CyrBookCardCover />
    <div class="card-table__info">
      <CyrBookCardTitle />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-table {
  height: 163px;
  display: flex;
  gap: 23px;
}
</style>
