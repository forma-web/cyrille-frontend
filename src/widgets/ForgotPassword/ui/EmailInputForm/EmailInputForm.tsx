import { AuthContainer } from 'entities/Auth';
import { CyrButton, CyrInput } from 'shared/ui';
import { Link } from 'react-router-dom';
import { getRouteLogin } from 'shared/consts/routers';
import { useInitialForm } from 'shared/lib';
import { emailInputSchema as schema } from '../../consts/emailInputSchema';
import { TEmailInputValues } from '../../model/types';
import { emailInputFields } from '../../consts/emailInputFields';

type TEmailInputFormProps = {
  handleSuccess?: (props: { email: string }) => void;
};

export const EmailInputForm = ({
  handleSuccess: handleSubmit,
}: TEmailInputFormProps) => {
  const { registerField, onSubmit } = useInitialForm<TEmailInputValues>({
    schema,
    handleSubmit,
  });

  return (
    <AuthContainer onSubmit={onSubmit}>
      <AuthContainer.Form>
        <h1>Forgot password</h1>
        <span>
          Enter your email linked with your account for the verification
          process, we&nbsp;will send code to&nbsp;you.
        </span>
        <CyrInput {...registerField(emailInputFields.email)} />
        {/* {!isTouched && <CyrError message={error} />} */}
      </AuthContainer.Form>
      <AuthContainer.Buttons>
        <CyrButton type="submit">Send a code</CyrButton>
      </AuthContainer.Buttons>
      <AuthContainer.Footer>
        <Link to={getRouteLogin()}>Back to login</Link>
      </AuthContainer.Footer>
    </AuthContainer>
  );
};
