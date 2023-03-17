import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/services/auth';
import { removeJWTToken } from '../utils/jwt';

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
      removeJWTToken();
      navigate('/auth/login');
    },
  });

  return logout;
};

export default useLogout;
