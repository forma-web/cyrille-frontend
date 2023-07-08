import { baseQuery } from '@/shared/api';
import { getVerifyEmailApiPath } from 'shared/consts/api';

type TVererifyRegistrationEmailQueryProps = {
  token: string;
  code: string;
};

export const verifyRegistrationEmailQuery = async ({
  token,
  code,
}: TVererifyRegistrationEmailQueryProps) => {
  return baseQuery<void>(getVerifyEmailApiPath(), {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify({
      code,
    }),
  });
};
