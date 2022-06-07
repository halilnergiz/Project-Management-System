import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { useRoutes } from 'react-router';
import { Home, Issue, Projects, Responsibility, NoMatch } from './pages'


const App = () => {

  let element = useRoutes([
    {
      index: true,
      element: <Home />
      // default componenti ayarlar. Projeyi ilk açtığında hangi component geleceğini gösterir
      // Projeyi ilk açtığındaki kasıt path = '/' olduğu durumdur
      // Bu sayede Home componentini aşağıda tanımlana gerek kalmaz
    }, 
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/responsibility',
      element: <Responsibility />
    },
    {
      path: '/issues',
      element: <Issue />,
    },
    {
      path: '*',
      element: <NoMatch />
    }

    // ]
  ])
  return element;

}

export default App;