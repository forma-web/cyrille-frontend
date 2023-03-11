import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../containers/Header/Header';
import Layout from '../Layout/Layout';

const MainLayout = () => {
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
