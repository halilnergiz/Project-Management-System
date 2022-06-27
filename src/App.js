import React from 'react';
import { useRoutes } from 'react-router';
import routes from './Routes';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html {
  height: 100%;
  margin: 0;
  padding: 0;
 }

 body, #root {
  height: 100%;
  margin: 0;
  padding: 0;
 }
`;

const AppWrapper = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
`;

const App = () => {
  const routing = useRoutes(routes);
  return (
    <>
      <AppWrapper>
        <GlobalStyle />
        {routing}
      </AppWrapper>
    </>
  );
};

export default App;
