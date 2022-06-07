import React from 'react';
import Routes from './Routes';
import { useRoutes } from 'react-router';
import routes from './Routes';

const App = () => {
  const routing = useRoutes(
    routes
  )

  return(
    <div>
      {routing}
    </div>
  )
}

export default App;