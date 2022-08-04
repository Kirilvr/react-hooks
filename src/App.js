import { Alert } from './alert/Alert';
import { Main } from './Main';
import React from 'react';
import { AlertProvider } from './alert/AlertContext';

export const App = () => {
  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
};
