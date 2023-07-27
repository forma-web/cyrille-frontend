import { TRegisterValues, TUseRegisterProps } from '@/entities/Auth';

export type TRegisterFormProps = TUseRegisterProps & {
  setUserData: React.Dispatch<
    React.SetStateAction<TRegisterValues | undefined>
  >;
};
