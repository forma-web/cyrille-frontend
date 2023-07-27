import { FormContainer } from 'shared/ui';
import { CyrButton, CyrError, CyrInput, CyrPasswordInput } from 'shared/ui';
import { useLogin } from '../../model/hooks/useLogin';
import { loginFields } from '../../consts/loginFields';
import { Link, useNavigate } from 'react-router-dom';
import {
  getRouteForgotPassword,
  getRouteRegister,
} from 'shared/consts/routers';
import { useCallback } from 'react';

export const LoginForm = () => {
  const {
    registerField,
    onSubmit,
    responseError: error,
    isTouched,
  } = useLogin();

  const navigate = useNavigate();

  const navigateToForgotPassword = useCallback(() => {
    navigate(getRouteForgotPassword());
  }, [navigate]);

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormContainer.Content>
        <h1>Login</h1>
        <CyrInput {...registerField(loginFields.email)} />
        <CyrPasswordInput {...registerField(loginFields.password)} />
        {!isTouched && <CyrError message={error} />}
      </FormContainer.Content>
      <FormContainer.Buttons>
        <CyrButton type="submit">Login</CyrButton>
        <CyrButton onClick={navigateToForgotPassword} secondary>
          Forgot password?
        </CyrButton>
      </FormContainer.Buttons>
      <FormContainer.Footer>
        <Link to={getRouteRegister()}>Don&apos;t have an account? Sign up</Link>
      </FormContainer.Footer>
    </FormContainer>
  );
};
