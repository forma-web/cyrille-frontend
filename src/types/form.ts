import { FieldPath, RegisterOptions } from 'react-hook-form';

export type TField<T extends Record<string, unknown>> = {
  name: keyof T;
  type?: string;
  label?: string;
  options?: RegisterOptions<T, FieldPath<T>>;
};

export type TFields<T extends Record<string, unknown>> = Record<
  keyof T,
  TField<T>
>;
