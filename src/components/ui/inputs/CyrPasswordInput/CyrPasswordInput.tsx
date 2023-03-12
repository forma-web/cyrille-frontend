import React, { useState } from 'react';
import CyrInput from '../CyrInput/CyrInput';
import CyrPasswordInputButtons from '../CyrPasswordInputButtons/CyrPasswordInputButtons';
import { TInputProps } from '../types/input';

const CyrPasswordInput = React.forwardRef<HTMLInputElement, TInputProps>(
  (props, ref) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
      <CyrInput ref={ref} {...props} type={hidePassword ? 'password' : 'text'}>
        <CyrPasswordInputButtons changePassword={setHidePassword} />
      </CyrInput>
    );
  },
);
CyrPasswordInput.displayName = 'CyrPasswordInput';

export default React.memo(CyrPasswordInput);
