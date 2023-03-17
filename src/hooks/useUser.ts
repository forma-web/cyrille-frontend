import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_JWT } from '@/constants/jwt';
import { currentUserFetch } from '@/services/user';

const useUser = () => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: ['user'],
    queryFn: currentUserFetch,
    retry: false,
    onError: (error: Error) => {
      if (error.message === '401') {
        localStorage.removeItem(LOCAL_STORAGE_JWT);
        navigate('/auth/login');
      }
    },
  });
};

export default useUser;
