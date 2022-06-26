import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar/SideBar';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;
const MainLayout = styled.div`
  height: 100%;
  width: 97%;
`;

const OutletWrapper = styled.div`
  border: 1px solid black;
  width: 90%;
  float: right;
  margin-top: 1rem;
  margin-right: 1rem;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <SideBar />

      <MainLayout>
        <Header />

        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </MainLayout>
    </LayoutWrapper>
  );
};

export default Layout;

// outlet -> tıklandığında yansıtılacak componentleri temsil eder.
// outlet'i nerede tanımlarsan yerine geçecek componentler de oraya yazdırılır.
