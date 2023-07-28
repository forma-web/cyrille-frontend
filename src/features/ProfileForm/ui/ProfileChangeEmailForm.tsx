import { AppRoutes } from '@/shared/consts/routers';
import { CyrButton, CyrInput, FormContainer } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { changeEmailFields } from '../consts/changeEmailFields';
import { useChangeEmail } from '../model/hooks/useChangeEmail';

export const ProfileChangeEmailForm = () => {
  const { registerField, isValidForm, isTouched, onSubmit } = useChangeEmail();

  const isDisabledSubmitButton = !isValidForm || !isTouched;

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContainer.Content>
        <h1>Change profile email</h1>
        <CyrInput {...registerField(changeEmailFields.email)} />
      </FormContainer.Content>
      <FormContainer.Buttons>
        <CyrButton type="submit" disabled={isDisabledSubmitButton}>
          Change
        </CyrButton>
      </FormContainer.Buttons>
      <FormContainer.Footer>
        <Link to={`/${AppRoutes.profile}`}>Back to profile page</Link>
      </FormContainer.Footer>
    </FormContainer>
  );
};
