import { FormContainer } from 'shared/ui';
import { CyrButton, CyrInput } from 'shared/ui';
import { useInitialForm } from 'shared/lib';
import { confirmEmailSchema as schema } from '../../consts/confirmEmailSchema';
import { confirmEmailFields } from '../../consts/confirmEmailFields';
import { TConfirmEmailValues } from '../../model/types';
import styles from './ConfirmEmailForm.module.scss';
import { memo } from 'react';
import { ResendCodeButton } from '../ResendCodeButton/ResendCodeButton';

type TConfirmEmailFormProps = {
  email: string;
  goToPrevForm?: () => void;
  handleSuссess?: () => void;
  handleError?: () => void;
};

export const ConfirmEmailForm = memo(
  ({ email, goToPrevForm }: TConfirmEmailFormProps) => {
    const { registerField, isTouched } = useInitialForm<TConfirmEmailValues>({
      schema,
    });

    return (
      <FormContainer>
        <FormContainer.Content>
          <h1>Verification</h1>
          <span>
            Enter your verification code we sent to the e-mail{' '}
            <span className={styles.email}>{email}</span>
          </span>
          <CyrInput {...registerField(confirmEmailFields.code)} />
          {/* {!isTouched && <CyrError message={} />} */}
        </FormContainer.Content>
        <FormContainer.Buttons>
          <CyrButton type="submit">Verify</CyrButton>
          <ResendCodeButton />
        </FormContainer.Buttons>
        <FormContainer.Footer>
          {goToPrevForm && <button onClick={goToPrevForm}>Change email</button>}
        </FormContainer.Footer>
      </FormContainer>
    );
  },
);

ConfirmEmailForm.displayName = 'ConfirmEmailForm';
