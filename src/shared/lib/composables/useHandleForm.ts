import type { FormOptions, GenericObject } from 'vee-validate';
import type { BaseSchema, BaseSchemaAsync, Input, MaybePromise } from 'valibot';
import { useForm } from 'vee-validate';

export function useHandleForm<
  TSchema extends BaseSchema | BaseSchemaAsync,
  THandler extends (data: TValues) => MaybePromise<void>,
  TOptions extends FormOptions<TValues>,
  TValues extends GenericObject = Input<TSchema>,
>({
  handler,
  schema,
  options,
}: {
  handler: THandler;
  schema: TSchema;
  options?: TOptions;
}) {
  const { handleSubmit } = useForm<TValues>(options);

  const onSubmit = handleSubmit(handler);

  return {
    onSubmit,
    schema,
  };
}
