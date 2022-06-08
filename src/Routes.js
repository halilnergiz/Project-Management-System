import React from 'react'
import { Layout, Issue, Projects, Responsibility, NoMatch, Home } from './pages';

    const routes = [
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
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

        {
            path: '*',
            element: <NoMatch />,
        },
    ]

export default routes;