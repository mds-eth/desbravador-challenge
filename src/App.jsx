import React from 'react';

import { ToastContainer } from 'react-toastify';

import AppRouter from './router';
import { SessionProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <SessionProvider>
      <AppRouter />
      <ToastContainer />
    </SessionProvider>
  );
};

export default App;
