import { Children } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import RequireAuth from './components/require-auth';
import UrlProvider from './context';
import AppLayout from './layouts/app-layout';
import Auth from './pages/auth';
import Dashboard from './pages/dashboard';
import LandingPage from './pages/landing';
import Link from './pages/link';
import RedirectLink from './pages/redirect-link';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/auth",
        element: <Auth />
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <Link />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />
      },
    ],
  },
]);

function App() {

  return (
    <UrlProvider>
      <RouterProvider router={router} />;
    </UrlProvider>
  );
}

export default App;
