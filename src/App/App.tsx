import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CyrLoader } from 'shared/ui';
import {
  AppRoutes,
  getRouteHome,
  routeBookDetailsWithBookId,
  routeBookReaderWithBookId,
} from 'shared/consts/routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainLayout, AuthLayout, RequiredAuth } from 'widgets/Layouts';
import { HomePage } from 'pages/HomePage';
import { ProfilePage } from 'pages/ProfilePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { BookPage } from 'pages/BookPage';
import { BookReaderPage } from 'pages/BookReaderPage';

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
        <Suspense fallback={<CyrLoader />}>
          <Routes>
            <Route path={getRouteHome()} element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path={routeBookDetailsWithBookId} element={<BookPage />} />
              <Route element={<RequiredAuth />}>
                <Route path={AppRoutes.profile} element={<ProfilePage />} />
              </Route>
            </Route>
            <Route
              path={routeBookReaderWithBookId}
              element={<BookReaderPage />}
            />
            <Route path={AppRoutes.auth} element={<AuthLayout />}>
              <Route index path={AppRoutes.login} element={<LoginPage />} />
              <Route path={AppRoutes.register} element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
