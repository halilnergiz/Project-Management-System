import React from 'react'
import { useRoutes } from 'react-router';
import { Home, Issue, Projects, Responsibility, NoMatch } from './pages';

const Routes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Home />,
            children: [
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
                    element: <NoMatch />,
                },
            ],
        },
    ])
    return element;
}

export default Routes;