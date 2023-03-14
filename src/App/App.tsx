import HomePage from '@/pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import LoginPage from '@/pages/LoginPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RegisterPage from '@/pages/RegisterPage';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { LOCAL_STORAGE_JWT } from '@/constants/jwt';
import BookPage from '@/pages/BookPage';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  const isAuth = !!localStorage.getItem(LOCAL_STORAGE_JWT);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <MainLayout /> : <Navigate to="/auth/login" />}
          >
            <Route index element={<HomePage />} />
            <Route path="books/:id" element={<BookPage />} />
          </Route>
          <Route
            path="auth"
            element={!isAuth ? <AuthLayout /> : <Navigate to="/" />}
          >
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
