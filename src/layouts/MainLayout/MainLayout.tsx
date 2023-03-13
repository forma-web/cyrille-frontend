import { Navigate, Outlet } from 'react-router-dom';
import { LOCAL_STORAGE_JWT } from '@/constants/jwt';
import Header from '@/containers/Header/Header';
import Layout from '../Layout/Layout';

const MainLayout = () => {
  const isAuth = !!localStorage.getItem(LOCAL_STORAGE_JWT);

  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Main>
        <Outlet />
      </Layout.Main>
    </Layout>
  );
};

export default MainLayout;
