import React from 'react';
import { Layout, NoMatch, Home } from './pages';
import Login from './pages/Login';
import Register from './pages/Register';
import store from './Store';

const routes = [
  {
    path:'/',
    element: <Login store={store}/>
  },
  {
    path:'/register',
    element: <Register store={store}/>
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },

  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;
