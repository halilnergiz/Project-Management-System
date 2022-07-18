import React from 'react';
import store from './Store';
import {Register, Login, Home, PrivateLayout, NoMatch, Unauthorized} from './components/pages';

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
    path: '/unauthorized',
    element: <Unauthorized />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;
