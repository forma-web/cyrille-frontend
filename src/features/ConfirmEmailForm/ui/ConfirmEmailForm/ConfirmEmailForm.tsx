import { CyrError, FormContainer } from 'shared/ui';
import { CyrButton, CyrInput } from 'shared/ui';
import { confirmEmailFields } from '../../consts/confirmEmailFields';
import styles from './ConfirmEmailForm.module.scss';
import { memo } from 'react';
import { ResendCodeButton } from '../ResendCodeButton/ResendCodeButton';
import { useConfirmEmail } from '../../model/hooks/useConfirmEmail';
import { TConfirmEmailValues } from '../../model/types';

type TConfirmEmailFormProps = {
  mutationFn: (data: TConfirmEmailValues) => Promise<void>;
  email?: string;
  goToPrevForm?: () => void;
  handleResendCode?: () => void;
  handleSuccess?: () => void;
};

export const ConfirmEmailForm = memo(
  ({
    email,
    goToPrevForm,
    handleResendCode,
    handleSuccess,
    mutationFn,
  }: TConfirmEmailFormProps) => {
    const { registerField, isTouched, onSubmit, responseError } =
      useConfirmEmail({
        onSuccess: handleSuccess,
        mutationFn,
      });

    return (
      <FormContainer onSubmit={onSubmit}>
        <FormContainer.Content>
          <h1>Verification</h1>
          <span>
            Enter your verification code we sent to the e-mail{' '}
            <span className={styles.email}>{email ?? ''}</span>
          </span>
          <CyrInput {...registerField(confirmEmailFields.code)} />
          {!isTouched && <CyrError message={responseError} />}
        </FormContainer.Content>
        <FormContainer.Buttons>
          <CyrButton type="submit">Verify</CyrButton>
          {handleResendCode && (
            <ResendCodeButton handleResendCode={handleResendCode} />
          )}
        </FormContainer.Buttons>
        <FormContainer.Footer>
          {goToPrevForm && <button onClick={goToPrevForm}>Change email</button>}
        </FormContainer.Footer>
      </FormContainer>
    );
  },
);

ConfirmEmailForm.displayName = 'ConfirmEmailForm';
