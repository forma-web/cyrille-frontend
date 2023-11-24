<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

defineOptions({
  inheritAttrs: false,
});

interface TInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  label?: string;
  modelValue?: string;
}

interface TInputEmits {
  (event: 'update:model-value', value: string): void;
}

const props = defineProps<TInputProps>();

const emit = defineEmits<TInputEmits>();

const updateValue = (e: Event) => {
  emit('update:model-value', (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div :class="$style.input">
    <label v-if="label">
      <span :class="$style.label">{{ label }}</span>
    </label>
    <div :class="$style.input__container">
      <input
        v-bind="$attrs"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="label"
        @input="updateValue"
      />
    </div>
  </div>
</template>

<style lang="scss" module>
.input {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  font-size: 1.1rem;
  color: var(--gray50);

  .label {
    transition:
      opacity var(--animation-time),
      translate var(--animation-time),
      color var(--animation-time);
  }

  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 1.6em;
    border-bottom: 0.1rem solid var(--gray30);
    transition: border-color var(--animation-time);
    font-size: 1.5rem;
  }
}
</style>
