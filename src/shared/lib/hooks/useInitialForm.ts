import { UseMutateFunction } from '@tanstack/react-query';
import { FieldValues, Path, useForm, UseFormProps } from 'react-hook-form';
import { TField } from 'shared/types/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type TUseInitialFormProps<T extends FieldValues, K = unknown> = {
  handleSubmit?: UseMutateFunction<K, unknown, T, unknown>;
  schema?: z.ZodTypeAny;
  formOptions?: UseFormProps<T, unknown>;
};

export const useInitialForm = <T extends FieldValues, K = unknown>({
  handleSubmit,
  schema,
  formOptions = {},
}: TUseInitialFormProps<T, K>) => {
  const {
    register,
    handleSubmit: reactHookFormHandleSubmit,
    control,
    reset,
    formState: { isDirty, isValid, errors, touchedFields, dirtyFields },
  } = useForm<T>({
    mode: 'onChange',
    resetOptions: {
      keepDirtyValues: true,
      keepIsValid: true,
    },
    resolver: schema && zodResolver(schema),
    ...formOptions,
  });

  const registerField = ({ name, options, ...field }: TField<T>) => ({
    error: errors[name]?.message,
    isValid: dirtyFields[name] && !errors[name],
    ...field,
    ...register(name as Path<T>, options),
  });

  const onSubmit = reactHookFormHandleSubmit((body) => {
    reset(body);
    handleSubmit?.(body);
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
