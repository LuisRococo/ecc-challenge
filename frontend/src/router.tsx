import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '*',
    element: <IndexPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
