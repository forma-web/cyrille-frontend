import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/services/auth';
import { jwt } from 'shared/lib';
import { LOGIN_ROUTE } from '../constants/routers';

const useLogout = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: () => logoutUser(),

    onSettled: () => {
      client.setQueriesData(['user'], null);
      client.invalidateQueries({
        queryKey: ['user'],
        refetchType: 'none',
      });
      jwt.removeJWTToken();
      navigate(LOGIN_ROUTE);
    },
  });

  return logout;
};

export default useLogout;
