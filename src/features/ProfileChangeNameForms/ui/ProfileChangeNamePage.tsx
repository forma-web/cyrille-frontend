import { AppRoutes } from '@/shared/consts/routers';
import { CyrButton, FormContainer } from '@/shared/ui';
import { Link } from 'react-router-dom';

export const ProfileChangeNameForm = () => {
  //   const {
  //     registerField,
  //     onSubmit,
  //     responseError: error,
  //     isTouched,
  //   } = useLogin();

  return (
    <FormContainer>
      <FormContainer.Content>
        <h1>Change profile name</h1>
        {/* <CyrInput {...registerField(changeNameFields.name)} /> */}
        {/* {!isTouched && <CyrError message={error} />} */}
      </FormContainer.Content>
      <FormContainer.Buttons>
        <CyrButton type="submit" disabled>
          Change
        </CyrButton>
      </FormContainer.Buttons>
      <FormContainer.Footer>
        <Link to={`/${AppRoutes.profile}`}>Back to profile page</Link>
      </FormContainer.Footer>
    </FormContainer>
  );
};
