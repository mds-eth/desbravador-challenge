import React from 'react';

import { ToastContainer } from 'react-toastify';
import { SkeletonTheme } from 'react-loading-skeleton';

import AppRouter from './router';
import { SessionProvider } from './contexts/AuthContext';
import { GitHubProvider } from './contexts/GitHubContext';

import 'react-tooltip/dist/react-tooltip.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';

const App = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" height={45}>
      <SessionProvider>
        <GitHubProvider>
          <AppRouter />
          <ToastContainer />
        </GitHubProvider>
      </SessionProvider>
    </SkeletonTheme >
  );
};

export default App;
