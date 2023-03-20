import { Outlet, useMatch } from 'react-router-dom';
import Header from '@/containers/Header/Header';
import Layout from '../Layout/Layout';
import { BOOK_ROUTE } from '@/constants/routers';

const MainLayout = () => {
  const bookPage = useMatch(BOOK_ROUTE);

  return (
    <Layout>
      <Layout.Header white={!!bookPage}>
        <Header />
      </Layout.Header>
      <Layout.Main>
        <Outlet />
      </Layout.Main>
    </Layout>
  );
};

export default MainLayout;
