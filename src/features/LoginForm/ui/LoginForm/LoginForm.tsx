import { AuthContainer } from 'entities/Auth';
import { CyrButton, CyrError, CyrInput, CyrPasswordInput } from 'shared/ui';
import { useLogin } from '../../model/hooks/useLogin';
import { loginFields } from '../../consts/loginFields';
import { Link } from 'react-router-dom';
import { getRouteRegister } from 'shared/consts/routers';

export const LoginForm = () => {
  const {
    registerField,
    onSubmit,
    responseError: error,
    isTouched,
  } = useLogin();

  return (
    <AuthContainer onSubmit={onSubmit}>
      <AuthContainer.Form>
        <h1>Login</h1>
        <CyrInput {...registerField(loginFields.email)} />
        <CyrPasswordInput {...registerField(loginFields.password)} />
        {!isTouched && <CyrError message={error} />}
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton type="submit">Login</CyrButton>
      </AuthContainer.Buttons>
      <AuthContainer.Footer>
        <Link to={getRouteRegister()}>Don&apos;t have an account? Sign up</Link>
      </AuthContainer.Footer>
    </AuthContainer>
  );
};
