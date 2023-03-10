import React from 'react';
import AuthContainer from '@/containers/AuthConatainer/AuthContainer';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import CyrInput from '@/components/ui/inputs/CyrInput/CyrInput';
import { useLogin } from '../../hooks/useLogin';
import { loginFields } from '../../constants/fields';
import CyrPasswordInput from '@/components/ui/inputs/CyrPasswordInput/CyrPasswordInput';

const Login = () => {
  const { registerField, isValidForm, isTouched, onSubmit, isLoading } =
    useLogin();

  return (
    <AuthContainer onSubmit={onSubmit}>
      <AuthContainer.Form>
        <h1>Login</h1>
        <CyrInput {...registerField(loginFields.email)} />
        <CyrPasswordInput {...registerField(loginFields.password)} />
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton type="submit">Login</CyrButton>
      </AuthContainer.Buttons>
    </AuthContainer>
  );
};

export default Login;
