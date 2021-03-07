import React from 'react';
import { Login } from './views/Login';
import { Desktop } from './views/Desktop';
import { useIsAuthorized } from './hooks/api/useIsAuthorized';

function App() {
  const { isAuthorized, isLoading } = useIsAuthorized();

  if (isLoading) {
    return null;
  }

  return <>{!isAuthorized ? <Login /> : <Desktop />}</>;
}

export default App;
