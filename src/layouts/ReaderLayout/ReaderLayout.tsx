import { Outlet } from 'react-router-dom';
import Layout from '../Layout/Layout';

const ReaderLayout = () => {
  return (
    <Layout>
      <Layout.Main>
        <Outlet />
      </Layout.Main>
    </Layout>
  );
};

export default ReaderLayout;
