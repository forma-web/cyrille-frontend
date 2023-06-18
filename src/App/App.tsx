import HomePage from '@/pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import RequiredAuth from '@/layouts/RequiredAuth';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import BookPage from '@/pages/BookPage';
import { BOOK_ROUTE, READER_ROUTE } from '@/constants/routers';
import { AppRoutes } from 'shared/consts/routers';
import BookReader from '@/containers/BookReader/BookReader';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 1,
        staleTime: Infinity,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.home} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={BOOK_ROUTE} element={<BookPage />} />
            <Route element={<RequiredAuth />}>
              <Route path={AppRoutes.profile} element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path={READER_ROUTE} element={<BookReader />} />
          <Route path={AppRoutes.auth} element={<AuthLayout />}>
            <Route index path={AppRoutes.login} element={<LoginPage />} />
            <Route path={AppRoutes.register} element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
