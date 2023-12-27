import React from 'react';
import { Home } from '../pages/website/home/Home';
import { SearchResult } from '../pages/website/home/SearchResult';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/layout/Error';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/search/:id',
        element: <SearchResult />
    }
]);

export default routes;