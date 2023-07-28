import { AppRoutes } from '@/shared/consts/routers';
import {
  CyrButton,
  CyrError,
  CyrPasswordInput,
  FormContainer,
} from '@/shared/ui';
import { Link } from 'react-router-dom';
import { useChangePassword } from '../model/hooks/useChangePassword';
import { changePasswordFields } from '../consts/changePasswordFields';

export const ProfileChangePasswordForm = () => {
  const {
    registerField,
    isValidForm,
    isTouched,
    onSubmit,
    responseError: error,
  } = useChangePassword();

  const isDisabledSubmitButton = !isValidForm || !isTouched;

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContainer.Content>
        <h1>Change profile password</h1>
        <CyrPasswordInput
          {...registerField(changePasswordFields.current_password)}
        />
        <CyrPasswordInput {...registerField(changePasswordFields.password)} />
        <CyrPasswordInput
          {...registerField(changePasswordFields.password_confirmation)}
        />
        {!isTouched && <CyrError message={error} />}
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
