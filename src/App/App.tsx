import HomePage from '@/pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import LoginPage from '@/pages/LoginPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RegisterPage from '@/pages/RegisterPage';
import Layout from '@/layouts/Layout/Layout';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
