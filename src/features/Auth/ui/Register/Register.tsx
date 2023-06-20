import { AuthContainer } from 'entities/Auth';
import { CyrButton, CyrError, CyrInput, CyrPasswordInput } from 'shared/ui';
import { registerFields } from '../../consts/registerFields';
import { Link } from 'react-router-dom';
import { useRegister } from '../../model/hooks/useRegister';
import { getRouteLogin } from 'shared/consts/routers';

export const Register = () => {
  const {
    registerField,
    onSubmit,
    responseError: error,
    isTouched,
  } = useRegister();

  return (
    <AuthContainer onSubmit={onSubmit}>
      <AuthContainer.Form>
        <CyrInput {...registerField(registerFields.name)} />
        <CyrInput {...registerField(registerFields.email)} />
        <CyrPasswordInput {...registerField(registerFields.password)} />
        {!isTouched && <CyrError message={error} />}
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton type="submit">Create account</CyrButton>
      </AuthContainer.Buttons>
      <AuthContainer.Footer>
        <Link to={getRouteLogin()}>Already have an account? Login</Link>
      </AuthContainer.Footer>
    </AuthContainer>
  );
};
