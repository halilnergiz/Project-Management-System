import React from 'react';
import { useRoutes } from 'react-router';
import routes from './Routes';
import { GlobalStyle, AppWrapper } from './style-components/Wrapper';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <AppWrapper>
      <GlobalStyle />
      {routing}
    </AppWrapper>
  )
}

export default App;