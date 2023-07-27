import { useMutation } from '@tanstack/react-query';
import { TUseRegisterProps } from '../types';
import { jwt } from '@/shared/lib';
import { registerUserQuery } from '../services/registerUserQuery';

export const useRegisterQuery = ({
  handleSuccess,
  handleError,
}: TUseRegisterProps = {}) => {
  return useMutation({
    mutationFn: registerUserQuery,
    onSuccess: ({ data, meta }) => {
      jwt.setJWTToken(meta);
      handleSuccess && handleSuccess(data);
    },
    onError: (err) => {
      handleError && handleError(err as Error);
    },
  });
};
