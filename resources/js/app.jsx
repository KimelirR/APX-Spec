import './bootstrap';
import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap-icons/bootstrap-icons.svg';


import Index from './components/Index';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    }
]);

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
