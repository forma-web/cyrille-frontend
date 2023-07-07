import { AuthContainer } from 'entities/Auth';
import { CyrButton, CyrPasswordInput } from 'shared/ui';
import { useInitialForm } from 'shared/lib';
import { resetPasswordSchema as schema } from '../../consts/resetPasswordSchema';
import { TResetPasswordValues } from '../../model/types';
import { resetPasswordFields } from '../../consts/resetPasswordFields';

export const ResetPasswordForm = () => {
  const { registerField, onSubmit } = useInitialForm<TResetPasswordValues>({
    schema,
  });

  return (
    <AuthContainer onSubmit={onSubmit}>
      <AuthContainer.Form>
        <h1>Reset password</h1>
        <span>
          Set the new password for your account so&nbsp;you can login and access
          all the features.
        </span>
        <CyrPasswordInput {...registerField(resetPasswordFields.password)} />
        <CyrPasswordInput {...registerField(resetPasswordFields.confirm)} />
        {/* {!isTouched && <CyrError message={error} />} */}
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton type="submit">Reset</CyrButton>
      </AuthContainer.Buttons>
    </AuthContainer>
  );
};
