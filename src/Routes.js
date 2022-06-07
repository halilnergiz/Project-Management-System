import React from 'react'
import { Home, Issue, Projects, Responsibility, NoMatch } from './pages';

    const routes = [
        {
            path: '/',
            element: <Home />,
            children: [
                // { index: true, element: <Projects /> },
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
            
            ],

        },
    ]

export default routes;