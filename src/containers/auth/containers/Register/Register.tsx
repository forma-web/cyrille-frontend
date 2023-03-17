import AuthContainer from '@/containers/AuthConatainer/AuthContainer';
import CyrButton from '@/components/ui/CyrButton/CyrButton';
import CyrInput from '@/components/ui/inputs/CyrInput/CyrInput';
import { registerFields } from '../../constants/fields';
import CyrPasswordInput from '@/components/ui/inputs/CyrPasswordInput/CyrPasswordInput';
import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';
import { LOGIN_ROUTE } from '@/constants/routers';

const Register = () => {
  const { registerField, onSubmit } = useRegister();

  return (
    <AuthContainer onSubmit={onSubmit}>
      <AuthContainer.Form>
        <CyrInput {...registerField(registerFields.name)} />
        <CyrInput {...registerField(registerFields.email)} />
        <CyrPasswordInput {...registerField(registerFields.password)} />
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton type="submit">Create account</CyrButton>
      </AuthContainer.Buttons>
      <AuthContainer.Footer>
        <Link to={LOGIN_ROUTE}>Already have an account? Login</Link>
      </AuthContainer.Footer>
    </AuthContainer>
  );
};

export default Register;
