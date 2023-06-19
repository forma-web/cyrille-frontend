import { Outlet, useMatch } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { Layout } from 'shared/ui';
import { BOOK_ROUTE } from '@/constants/routers';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  const bookPage = useMatch(BOOK_ROUTE);

  return (
    <Layout>
      <Layout.Header white={!!bookPage}>
        <Header />
      </Layout.Header>
      <Layout.Main>
        <div className={styles.main__container}>
          <Outlet />
        </div>
      </Layout.Main>
    </Layout>
  );
};

export default MainLayout;
