import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/routes';
import AuthProviders from './providers/AuthProviders';
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>

      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProviders>
  </React.StrictMode>,
)
