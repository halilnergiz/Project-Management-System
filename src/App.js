import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useRoutes } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import routes from './Routes';
import { observer } from 'mobx-react';
import './axios_config';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
 html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
 }

 body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
 }
`;

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const App = observer(({ store }) => {

  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={store.theme} >
      <AppWrapper>
        <ToastContainer />
        <GlobalStyle />
        {routing}
      </AppWrapper>
    </ThemeProvider>
  );
});

export default App;
