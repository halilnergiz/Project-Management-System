import React from 'react';
import store from './Store';
import {Register, Login, Home, Layout, NoMatch} from './components/pages';

const routes = [
  {
    path: '/',
    element: <Login store={store} />
  },
  {
    path: '/register',
    element: <Register store={store} />
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;
