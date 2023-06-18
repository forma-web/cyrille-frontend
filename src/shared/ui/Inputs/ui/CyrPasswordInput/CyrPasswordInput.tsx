import { useState, memo, forwardRef } from 'react';
import { CyrInput } from 'shared/ui';
import { CyrPasswordInputButtons } from '../CyrPasswordInputButtons/CyrPasswordInputButtons';
import { TInputProps } from '../../model';

export const CyrPasswordInput = memo(
  forwardRef<HTMLInputElement, TInputProps>((props, ref) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
      <CyrInput ref={ref} {...props} type={hidePassword ? 'password' : 'text'}>
        <CyrPasswordInputButtons changePassword={setHidePassword} />
      </CyrInput>
    );
  }),
);

CyrPasswordInput.displayName = 'CyrPasswordInput';
