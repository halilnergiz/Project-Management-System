import React from 'react';
import store from './Store';
import {Register, Login, Home, PrivateLayout, NoMatch} from './components/pages';

// route schema 
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
    element: <PrivateLayout store={store}/>,
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
