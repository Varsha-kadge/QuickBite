import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Src/Components/Body';
import Header from './Src/Components/Header';
import About from './Src/Components/About';
import Contact from './Src/Components/Contact';
import Error from './Src/Components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './Src/Components/RestaurantMenu';
import { lazy } from 'react';

const Grocery = lazy(() => import('./Src/Components/Grocery'));

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
