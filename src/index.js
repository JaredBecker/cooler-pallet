import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App';

import './Main.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home Page</h1>,
        errorElement: <h1>Done Goofed</h1>
    },
    {
        path: 'pallet/:id',
        element: <App />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
