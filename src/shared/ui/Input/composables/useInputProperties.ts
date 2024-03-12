import type { Ref } from 'vue';

export function useInputProperties(model: Ref<string | undefined>) {
  const isActive = ref(false);

  const isEmpty = computed(() => {
    if (!model.value)
      return true;

    return model.value?.trim().length === 0;
  });

  const onFocus = () => (isActive.value = true);
  const onBlur = () => (isActive.value = false);

  return {
    isActive: readonly(isActive),
    isEmpty,
    focus: onFocus,
    blur: onBlur,
  };
}
