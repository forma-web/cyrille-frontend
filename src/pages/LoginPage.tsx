import React from 'react';
import AuthContainer from '@/containers/AuthConatainer/AuthContainer';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import CyrInput from '@/components/ui/CyrInput/CyrInput';

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthContainer.Form>
        <h1>Login</h1>
        <CyrInput label='Email'/>
        <CyrInput label='Password'/>
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton>Login</CyrButton>
      </AuthContainer.Buttons>
    </AuthContainer>
  );
};

export default LoginPage;
