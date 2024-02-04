<script setup lang="ts">
interface BookDescriptionProps {
  description: string;
}

const { description } = defineProps<BookDescriptionProps>();
</script>

<template>
  <div>
    <p :class="$style.description">{{ description }}</p>
    <div :class="$style.details">
      <div :class="$style.details_row">
        <span>LENGTH</span>
        <span>5 pages</span>
      </div>
      <div :class="$style.details_row">
        <span>RELEASED</span>
        <span>18 February 2022</span>
      </div>
      <div :class="$style.details_row">
        <span>LANGUAGE</span>
        <span>English</span>
      </div>
      <div :class="$style.details_row">
        <span>TAGS</span>
        <div :class="$style.tags">
          <span>Fantasy</span>
          <span>Bestsellers</span>
          <span>New</span>
          <span>Sci-fi</span>
          <span>Thriller</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.description {
  margin-top: 4rem;
  margin-bottom: 4rem;
  max-width: 60rem;
}

.tags {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;

  & > span {
    font-size: 0.9em;
    font-weight: 300;
    padding: 0.4rem 1rem;
    border-radius: var(--rounding-xl);
    background-color: var(--gray30);
    color: var(--gray50);
  }

  & > span:hover {
    color: var(--accent-color);
    background-color: var(--accent-complementary-color);
  }
}

.details {
  max-width: 36rem;
  display: flex;
  flex-direction: column;
  row-gap: var(--base-gap);

  &_row {
    display: flex;
    justify-content: space-between;

    & > span:first-child {
      color: var(--gray50);
      flex-basis: 50%;
    }
  }
}
</style>
