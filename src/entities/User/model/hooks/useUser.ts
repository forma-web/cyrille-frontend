import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { JWT_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { getCurrentUserQuery } from '../services/getCurrentUserQuery';
import { getRouteLogin } from 'shared/consts/routers';

export const useUser = () => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUserQuery,
    retry: false,
    onError: (error: Error) => {
      // TODO: refactor this
      if (error.message === '401') {
        localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
        navigate(getRouteLogin());
      }
    },
  });
};
