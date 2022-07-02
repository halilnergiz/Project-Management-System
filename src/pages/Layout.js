import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar/SideBar';
import styled, { ThemeProvider } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { lightTheme, darkTheme } from '../Theme';


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

// const ChangeTheme = styled.button`

// `

const Layout = () => {
  const [theme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <SideBar />

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
};

export default Layout;

// outlet -> tıklandığında yansıtılacak componentleri temsil eder.
// outlet'i nerede tanımlarsan yerine geçecek componentler de oraya yazdırılır.
