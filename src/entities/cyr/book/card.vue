<script setup lang="ts">
type BookCardVariants = 'full' | 'cover' | 'table';
interface BookCardProps {
  cardType: BookCardVariants;
}
defineProps<BookCardProps>();
</script>

<template>
  <div v-if="cardType === 'full'" class="card-container">
    <CyrBookCardCover />
    <CyrBookCardDetails />
    <CyrBookCardTitle />
  </div>

  <div v-else-if="cardType === 'cover'" class="card-container">
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
.card-container {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
}

.card-table {
  max-height: 15rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}
</style>
