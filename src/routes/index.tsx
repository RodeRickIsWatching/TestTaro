import { createBrowserRouter, Navigate, Link, RouterProvider, redirect, useNavigate } from 'react-router-dom';
import BasicLayout from '@/layouts';
import { useEffect } from 'react';
import WalletLayout from '@/layouts/walletLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WalletLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/Home'),
      },
    ],
  },
  {
    path: '/home',
    element: <WalletLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/Home'),
      },
    ],
  },
  {
    path: '/token',
    element: <WalletLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/Token'),
      },
    ],
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]);

function NoMatch() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, []);

  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/home">Go to the home page</Link>
      </p>
    </div>
  );
}

function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default Router;
