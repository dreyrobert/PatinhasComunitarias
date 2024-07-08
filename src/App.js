import React from 'react';
import { AuthProvider } from './context/AuthContext';
import RoutesComponent from './routes';

const App = () => {
  return (
    <AuthProvider>
        <RoutesComponent />
    </AuthProvider>
  );
};

export default App;
