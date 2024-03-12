<script lang="ts">
interface RadioProps {
  value: string;
}
</script>

<script setup lang="ts">
import { injectRadioGroupContext } from '../RadioGroup/RadioGroup.vue';
import styles from './Radio.module.scss';

const { value } = defineProps<RadioProps>();

const context = injectRadioGroupContext();

const checked = computed(() => context.modelValue?.value === value);
</script>

<template>
  <label :class="styles.radio">
    <input
      type="radio"
      :checked
      :class="styles.radio__input"
      :name="context.name"
      @click="context.changeModelValue(value)"
    >
    <span :class="styles.radio__box">
      <span :class="styles.radio__mark" />
    </span>
    <span :class="styles.radio__label"><slot /></span>
  </label>
</template>
