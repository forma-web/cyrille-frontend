import { AppRoutes } from '@/shared/consts/routers';
import { CyrButton, CyrInput, FormContainer } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { useChangeName } from '../model/hooks/useChangeName';
import { changeNameFields } from '../consts/changeNameFields';

export const ProfileChangeNameForm = () => {
  const { registerField, isValidForm, isTouched } = useChangeName();

  const isDisabledSubmitButton = !isValidForm || !isTouched;

  return (
    <FormContainer>
      <FormContainer.Content>
        <h1>Change profile name</h1>
        <CyrInput {...registerField(changeNameFields.name)} />
        {/* {!isTouched && <CyrError message={error} />} */}
      </FormContainer.Content>
      <FormContainer.Buttons>
        <CyrButton type="submit" disabled={isDisabledSubmitButton}>
          Change
        </CyrButton>
      </FormContainer.Buttons>
      <FormContainer.Footer>
        <Link to={`/${AppRoutes.profile}`}>Back to profile page</Link>
      </FormContainer.Footer>
    </FormContainer>
  );
};
