import { AuthContainer } from 'entities/Auth';
import { CyrButton, CyrInput } from 'shared/ui';
import { confirmEmailFields } from '../../consts/confirmEmailFields';
import styles from './ConfirmEmailForm.module.scss';
import { ReactNode, memo } from 'react';
import { ResendCodeButton } from '../ResendCodeButton/ResendCodeButton';
import { useConfirmEmail } from '../../model/hooks/useConfirmEmail';
import { TMeta } from '@/shared/types/api';

type TConfirmEmailFormProps = {
  email: string;
  tokenData?: TMeta;
  handleSuccess: () => void;
  renderFooterContent?: () => ReactNode;
  handleError?: () => void;
};

export const ConfirmEmailForm = memo(
  ({
    email,
    tokenData,
    handleSuccess,
    handleError,
    renderFooterContent,
  }: TConfirmEmailFormProps) => {
    const { registerField, isTouched, onSubmit } = useConfirmEmail({
      tokenData,
      handleSuccess,
      handleError,
    });

    return (
      <AuthContainer onSubmit={onSubmit}>
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
        <AuthContainer.Footer>
          {renderFooterContent && renderFooterContent()}
        </AuthContainer.Footer>
      </AuthContainer>
    );
  },
);

ConfirmEmailForm.displayName = 'ConfirmEmailForm';
