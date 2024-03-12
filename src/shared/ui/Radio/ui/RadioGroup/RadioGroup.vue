<script lang="ts">
import { createContext } from '@shared/lib/context';

interface RadioGroupProps {
  name?: string;
}

interface RadioGroupContext {
  modelValue?: Readonly<Ref<string | undefined>>;
  changeModelValue: (value?: string) => void;
  name?: string;
}

export const [injectRadioGroupContext, provideRadioGroupContext]
  = createContext<RadioGroupContext>('RadioGroup');
</script>

<script setup lang="ts">
import { readonly } from 'vue';

const { name } = defineProps<RadioGroupProps>();

const model = defineModel<string>();

provideRadioGroupContext({
  modelValue: readonly(model),
  changeModelValue: value => (model.value = value),
  name,
});
</script>

<template>
  <slot />
</template>
