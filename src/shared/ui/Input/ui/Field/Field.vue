<script setup lang="ts">
import { useField } from 'vee-validate';
import type { FieldProps } from '../../types';
import { CyrFieldStatus, CyrInput } from '..';
import { useInputProperties } from '../../composables/useInputProperties';
import style from './Field.module.scss';

defineOptions({
  inheritAttrs: false,
});

const {
  name,
  label,
  type = 'text',
  hideStatus = false,
} = defineProps<FieldProps>();

const { value, errorMessage, meta } = useField<string>(name);
const { isActive, isEmpty, ...listeners } = useInputProperties(value);

const isError = computed(() => !meta.valid && meta.dirty);

const fieldStyle = computed(() => ({
  [style.field_empty]: isEmpty.value,
  [style.field_active]: isActive.value,
  [style.field_error]: isError.value,
}));
</script>

<template>
  <label :class="[style.field, fieldStyle]">
    <span v-if="label" :class="style.field__label">{{ label }}</span>
    <span :class="style.field__container">
      <CyrInput
        :name
        :type
        :placeholder="label"
        v-model="value"
        v-bind="$attrs"
        v-on="listeners"
      />
      <span :class="style.field__control">
        <slot v-if="!hideStatus">
          <CyrFieldStatus :isValid="!isError" v-if="meta.dirty" />
        </slot>
      </span>
    </span>
    <span :class="style.field__footer">
      {{ errorMessage }}
    </span>
  </label>
</template>
