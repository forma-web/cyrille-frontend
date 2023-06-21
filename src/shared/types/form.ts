import { FieldPath, RegisterOptions } from 'react-hook-form';

export type TField<T extends Record<string, unknown>> = {
  name: FieldPath<T>;
  type?: string;
  label?: string;
  options?: RegisterOptions<T, FieldPath<T>>;
};

export type TFields<
  T extends Record<string, unknown> = Record<string, unknown>,
> = Record<keyof T, TField<T>>;
