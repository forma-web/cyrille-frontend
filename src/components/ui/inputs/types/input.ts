export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  isValid?: boolean;
  statusHidden?: boolean;
};
