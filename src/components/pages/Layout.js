import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import NoMatch from './NoMatch';
// eslint-disable-next-line no-unused-vars
import { lightTheme, darkTheme } from '../UI/Theme';
import Sidebar from '../templates/layout/SideBar/SideBar';
import Header from '../templates/layout/Header';

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

// const ChangeTheme = styled.button`
// `

const Layout = () => {
  const [theme] = useState(darkTheme);

  if (localStorage.getItem('clientToken') !== 'null') {
    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper>
          <Sidebar />

          <MainLayout>

            <Header />

            {/* Change Theme Code */}
            {/* <ChangeTheme onClick={() => setTheme(theme == lightTheme ? darkTheme : lightTheme)}>
            theme
          </ChangeTheme> */}

            <OutletWrapper>
              <Outlet />
            </OutletWrapper>

          </MainLayout>

        </LayoutWrapper>
      </ThemeProvider>
    );
  } else {
    return (
      <NoMatch />
    );
  }
};

export default Layout;

// outlet -> tıklandığında yansıtılacak componentleri temsil eder.
// outlet'i nerede tanımlarsan yerine geçecek componentler de oraya yazdırılır.
