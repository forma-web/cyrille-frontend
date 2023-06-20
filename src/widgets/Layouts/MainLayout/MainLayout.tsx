import { Outlet, useMatch } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { Layout } from 'shared/ui';
import { routeBookDetailsWithBookId } from 'shared/consts/routers';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  const bookPage = useMatch(routeBookDetailsWithBookId);

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
