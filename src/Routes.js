import React from 'react';
import { Layout, Issue, Projects, Responsibility, NoMatch, Home } from './pages';
import Login from './pages/Login';
import Register from './pages/Register';

const routes = [
  {
    path: '/',
    element: <Register />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/responsibility',
        element: <Responsibility />,
      },
      {
        path: '/issues',
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
