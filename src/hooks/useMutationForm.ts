import { UseMutateFunction } from '@tanstack/react-query';
import { FieldValues, Path, useForm, UseFormProps } from 'react-hook-form';
import { TField } from '@/types/form';

const useMutationForm = <T extends FieldValues, K extends unknown = unknown>(
  mutate: UseMutateFunction<K, unknown, T, unknown>,
  formOptions: UseFormProps<T, unknown> = {}
) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isDirty, isValid, errors, touchedFields },
  } = useForm<T>({
    mode: 'onChange',
    resetOptions: {
      keepDirtyValues: true,
      keepIsValid: true,
    },
    ...formOptions,
  });

  const registerField = ({ name, options, ...field }: TField<T>) => ({
    error: errors[name]?.message,
    ...field,
    ...register(name as Path<T>, options),
  });

  const onSubmit = handleSubmit((body) => {
    console.log(body);

    reset(body);
    mutate(body);
  });

  return {
    registerField,
    onSubmit,
    control,
    errors,
    isValidForm: isDirty && isValid,
    isTouched: Object.keys(touchedFields).length > 0,
  };
};

export default useMutationForm;
