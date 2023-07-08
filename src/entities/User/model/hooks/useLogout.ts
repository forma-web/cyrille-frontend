import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { jwt } from 'shared/lib';
import { getRouteLogin } from 'shared/consts/routers';
import { logoutUserQuery } from '../services/logoutUserQuery';

export const useLogout = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: logoutUserQuery,

    onSettled: () => {
      client.setQueriesData(['user'], null);
      client.invalidateQueries({
        queryKey: ['user'],
        refetchType: 'none',
      });
      jwt.removeJWTToken();
      navigate(getRouteLogin());
    },
  });

  return logout;
};
