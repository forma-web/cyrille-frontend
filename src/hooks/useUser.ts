import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { JWT_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';
import { currentUserFetch } from '@/services/user';

const useUser = () => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: ['user'],
    queryFn: currentUserFetch,
    retry: false,
    onError: (error: Error) => {
      // TODO: refactor this
      if (error.message === '401') {
        localStorage.removeItem(JWT_LOCALSTORAGE_KEY);
        navigate('/auth/login');
      }
    },
  });
};

export default useUser;
