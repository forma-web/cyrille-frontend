import HomePage from '@/pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import { MainLayout, AuthLayout, RequiredAuth } from 'widgets/Layouts';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import BookPage from '@/pages/BookPage';
import {
  routeBookDetailsWithBookId,
  routeBookReaderWithBookId,
} from 'shared/consts/routers';
import { AppRoutes, getRouteHome } from 'shared/consts/routers';
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
      {/* TODO: create router provider */}
      <BrowserRouter>
        <Routes>
          <Route path={getRouteHome()} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={routeBookDetailsWithBookId} element={<BookPage />} />
            <Route element={<RequiredAuth />}>
              <Route path={AppRoutes.profile} element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path={routeBookReaderWithBookId} element={<BookReader />} />
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
