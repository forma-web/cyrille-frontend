<script setup lang="ts">
import { CyrCheckbox } from '@shared/ui/Checkbox';
import { CyrSwitch } from '@shared/ui/Switch';
import { CyrRadioGroup, CyrRadio } from '@shared/ui/Radio';

const selected = ref('date');
</script>

<template>
  <div :class="$style.library">
    <h2 :class="$style.library__header">Library</h2>
    <div></div>
    <aside :class="$style.library__filters">
      <h5>FILTERS</h5>
      <section>
        <h5>LANGUAGE</h5>
        <CyrCheckbox> Russian </CyrCheckbox>
        <CyrCheckbox> English </CyrCheckbox>
      </section>
      <section>
        <CyrSwitch> On sale </CyrSwitch>
        <CyrSwitch> Highly rated </CyrSwitch>
        <CyrSwitch> Exclusive </CyrSwitch>
      </section>
      <section>
        <h5>SORT BY</h5>
        <CyrRadioGroup v-model="selected">
          <CyrRadio value="date"> Date </CyrRadio>
          <CyrRadio value="rating"> Rating </CyrRadio>
        </CyrRadioGroup>
      </section>
    </aside>
    <NuxtPage />
  </div>
</template>

<style module lang="scss">
.library {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr auto;
  align-items: start;
  gap: var(--base-gap);

  &__header {
    margin: 0;
    text-transform: uppercase;
  }

  &__filters {
    position: sticky;
    top: var(--header-height);
    padding: 2rem;
    border-right: 1.5px solid var(--gray30);

    & > section {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--gray30);

      &:last-child {
        border-bottom: none;
      }

      & > h5 {
        margin: 0 0 1.2rem 0;
        color: var(--gray50);
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
}
</style>
