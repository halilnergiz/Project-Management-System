import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../../templates/sub_components/SideBar/SideBar';
import Header from '../../templates/sub_components/Header';
import Unauthorized from '../Unauthorized';
import { observer } from 'mobx-react-lite';

const LayoutWrapper = styled.div`
    height: 100%; 
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
`;

const MainLayout = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dashboard = observer(({ store }) => {
  console.log(store);

  return (
    store.token !== 'null'
      ?
      <LayoutWrapper>
        <Sidebar />

        <MainLayout>

          <Header store={store} />

          <Outlet />

        </MainLayout>

      </LayoutWrapper >
      :
      <Unauthorized />
  );

});

export default Dashboard;

