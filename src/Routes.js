import React from 'react';
import { Layout, Issue, Projects, Responsibility, NoMatch, Home } from './pages';
import Login from './pages/Login';
import Register from './pages/Register';

const routes = [
  {
    path:'/',
    element: <Login/>
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'dashboard/projects',
        element: <Projects />,
      },
      {
        path: 'dashboard/responsibility',
        element: <Responsibility />,
      },
      {
        path: 'dashboard/issues',
        element: <Issue />,
      },
    ],
  },

  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;
