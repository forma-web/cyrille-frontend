import { FormContainer } from 'shared/ui';
import { CyrButton, CyrError, CyrInput, CyrPasswordInput } from 'shared/ui';
import { Link } from 'react-router-dom';
import { useRegister } from '../../model/hooks/useRegister';
import { getRouteLogin } from 'shared/consts/routers';
import { TRegisterFormProps } from '../../model/types';
import { registerFields } from '@/entities/Auth';

export const RegisterForm = ({
  handleSuccess,
  handleError,
  setUserData,
}: TRegisterFormProps) => {
  const {
    registerField,
    onSubmit,
    responseError: error,
    isTouched,
  } = useRegister({ handleSuccess, handleError, setUserData });

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContainer.Content>
        <h1>Sign up</h1>
        <CyrInput {...registerField(registerFields.name)} />
        <CyrInput {...registerField(registerFields.email)} />
        <CyrPasswordInput {...registerField(registerFields.password)} />
        {!isTouched && <CyrError message={error} />}
      </FormContainer.Content>
      <FormContainer.Buttons>
        <CyrButton type="submit">Create account</CyrButton>
      </FormContainer.Buttons>
      <FormContainer.Footer>
        <Link to={getRouteLogin()}>Already have an account? Login</Link>
      </FormContainer.Footer>
    </FormContainer>
  );
};
