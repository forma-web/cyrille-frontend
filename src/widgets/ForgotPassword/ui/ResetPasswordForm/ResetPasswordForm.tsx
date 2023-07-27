import { CyrError, FormContainer } from 'shared/ui';
import { CyrButton, CyrPasswordInput } from 'shared/ui';
import { useInitialForm } from 'shared/lib';
import { resetPasswordSchema as schema } from '../../consts/resetPasswordSchema';
import { TResetPasswordValues } from '../../model/types';
import { resetPasswordFields } from '../../consts/resetPasswordFields';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getRouteLogin } from '@/shared/consts/routers';
import { resetPasswordQuery } from '../../model/services/resetPasswordQuery';
import { useState } from 'react';

type TResetPasswordFormProps = {
  email: string;
};

export const ResetPasswordForm = ({ email }: TResetPasswordFormProps) => {
  const [responseError, setResponseError] = useState<string>();
  const navigate = useNavigate();
  const { mutate: handleSubmit } = useMutation({
    mutationFn: ({ password }: TResetPasswordValues) =>
      resetPasswordQuery({ password, email }),
    onSuccess: () => {
      navigate(getRouteLogin());
    },
    onError: (error: Error) => {
      setResponseError(() => error.message);
    },
  });

  const { registerField, onSubmit, isTouched } =
    useInitialForm<TResetPasswordValues>({
      schema,
      handleSubmit,
    });

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContainer.Content>
        <h1>Reset password</h1>
        <span>
          Set the new password for your account so&nbsp;you can login and access
          all the features.
        </span>
        <CyrPasswordInput {...registerField(resetPasswordFields.password)} />
        <CyrPasswordInput {...registerField(resetPasswordFields.confirm)} />
        {!isTouched && <CyrError message={responseError} />}
      </FormContainer.Content>
      <FormContainer.Buttons>
        <CyrButton type="submit">Reset</CyrButton>
      </FormContainer.Buttons>
    </FormContainer>
  );
};
