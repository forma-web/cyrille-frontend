<script setup lang="ts">
import ImageCardSection from '@widgets/Landing/ImageCardSection.vue';
import TwoColumnsSection from '@widgets/Landing/TwoColumnsSection.vue';
import { CyrButton } from '@shared/ui/Button';
</script>

<template>
  <div>
    <TwoColumnsSection>
      <template #left>
        <h2>SUBSCRIBE AND ENJOY</h2>
        <ul>
          <li>
            <span class="highlight accent-font">“Behind the pages”</span> -
            exclusive glimpse into the creative process of crafting our books
          </li>
          <li>
            <span class="highlight accent-font">“Be first”</span> - personal
            newsletter about upcoming releases
          </li>
          <li>
            <span class="highlight accent-font">
              Unlimited access to all books
            </span>
            each featuring unique content
          </li>
          <li><span class="highlight accent-font">Cancel anytime</span></li>
        </ul>
        <CyrButton>Continue with 3 months</CyrButton>
      </template>
      <template #right>
        <div></div>
      </template>
    </TwoColumnsSection>
    <ImageCardSection background="/backgrounds/boy-with-book.png" />
  </div>
</template>

<style scoped lang="scss">
.highlight {
  color: var(--primary-text-color);
}

h2 {
  margin: 0;
}

ul {
  list-style: '- ';
  padding: 0;
  font-size: 1.1em;
  color: var(--gray50);

  li {
    margin-bottom: 0.8rem;
  }
}
</style>
