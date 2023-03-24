import HomePage from '@/pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import RequiredAuth from '@/layouts/RequiredAuth';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import BookPage from '@/pages/BookPage';
import { BOOK_ROUTE, ERoutes } from '@/constants/routers';
import BookReader from '@/containers/BookReader/BookReader';
import ReaderLayout from '@/layouts/ReaderLayout/REaderLayout';

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
          <Route path={ERoutes.home} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={BOOK_ROUTE} element={<BookPage />} />
            <Route element={<RequiredAuth />}>
              <Route path={ERoutes.profile} element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path={ERoutes.reader} element={<ReaderLayout />}>
            <Route index element={<BookReader />} />
          </Route>
          <Route path={ERoutes.auth} element={<AuthLayout />}>
            <Route index path={ERoutes.login} element={<LoginPage />} />
            <Route path={ERoutes.register} element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
