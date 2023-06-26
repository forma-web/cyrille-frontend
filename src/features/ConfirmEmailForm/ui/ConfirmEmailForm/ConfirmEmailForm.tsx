import { AuthContainer } from 'entities/Auth';
import { CyrButton, CyrInput } from 'shared/ui';
import { useMutationForm } from 'shared/lib';
import { confirmEmailSchema } from '../../consts/confirmEmailSchema';
import { confirmEmailFields } from '../../consts/confirmEmailFields';
import { TConfirmEmailValues } from '../../model/types';
import styles from './ConfirmEmailForm.module.scss';
import { memo } from 'react';
import { ResendCodeButton } from '../ResendCodeButton/ResendCodeButton';

type TConfirmEmailFormProps = {
  email: string;
};

export const ConfirmEmailForm = memo(({ email }: TConfirmEmailFormProps) => {
  const { registerField, isTouched } = useMutationForm<TConfirmEmailValues>(
    () => {},
    confirmEmailSchema,
  );

  return (
    <AuthContainer>
      <AuthContainer.Form>
        <h1>Verification</h1>
        <span>
          Enter your verification code we sent to the e-mail{' '}
          <span className={styles.email}>{email}</span>
        </span>
        <CyrInput {...registerField(confirmEmailFields.code)} />
        {/* {!isTouched && <CyrError message={} />} */}
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton type="submit">Verify</CyrButton>
        <ResendCodeButton />
      </AuthContainer.Buttons>
      {/* <AuthContainer.Footer>
        <Link to={getRouterRegister()}>
          Don&apos;t have an account? Sign up
        </Link>
      </AuthContainer.Footer> */}
    </AuthContainer>
  );
});

ConfirmEmailForm.displayName = 'ConfirmEmailForm';
