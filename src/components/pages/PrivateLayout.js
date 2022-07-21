import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../templates/layout/SideBar/SideBar';
import Header from '../templates/layout/Header';
import Unauthorized from './Unauthorized';
import { observer } from 'mobx-react-lite';

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
  float: right;
  width: 90%;
  margin-top: 1rem;
  margin-right: 1rem;
`;

// eslint-disable-next-line no-unused-vars
const PrivateLayout = observer(({ store }) => {
  console.log(store);

  return (
    store.token !== 'null' 
      ? 
      <LayoutWrapper>
        <Sidebar />

        <MainLayout>
          <Header store= {store} />

          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </MainLayout>

      </LayoutWrapper >
      :
      <Unauthorized />
  ); 

});

export default PrivateLayout;

// outlet -> tıklandığında yansıtılacak componentleri temsil eder.
// outlet'i nerede tanımlarsan yerine geçecek componentler de oraya yazdırılır.
