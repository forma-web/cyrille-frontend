import AuthContainer from '@/containers/AuthConatainer/AuthContainer';
import { CyrButton, CyrError } from 'shared/ui';
import CyrInput from '@/components/ui/inputs/CyrInput/CyrInput';
import { useLogin } from '../../hooks/useLogin';
import { loginFields } from '../../constants/fields';
import CyrPasswordInput from '@/components/ui/inputs/CyrPasswordInput/CyrPasswordInput';
import { Link } from 'react-router-dom';
import { REGISTER_ROUTE } from '@/constants/routers';

const Login = () => {
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
        <Link to={REGISTER_ROUTE}>Don&apos;t have an account? Sign up</Link>
      </AuthContainer.Footer>
    </AuthContainer>
  );
};

export default Login;
