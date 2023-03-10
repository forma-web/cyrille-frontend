import HomePage from '@/pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import LoginPage from '../pages/LoginPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

