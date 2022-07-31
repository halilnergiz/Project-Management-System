import React from 'react';
import store from './Store';
import { Register, Login, Home, Dashboard, NoMatch, Unauthorized } from './components/pages';
import CreateProject from './components/pages/private_pages/dash_routes/CreateProject';
import CreateSubject from './components/pages/private_pages/dash_routes/CreateSubject';

// route schema 
const routes = [
  {
    path: '/',
    element: <Login store={store} />
  },
  {
    path: 'register',
    element: <Register store={store} />
  },
  {
    path: 'dashboard',
    element: <Dashboard store={store} />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'create_new_project',
        element: <CreateProject store={store} /> 
      },
      {
        path: 'create_new_subject',
        element: <CreateSubject />
      }
    ],
  },
  {
    path: 'unauthorized',
    element: <Unauthorized />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;
