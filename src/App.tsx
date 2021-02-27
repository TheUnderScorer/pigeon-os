import React from 'react';
import { useLoginStore } from './store/loginStore';
import { Login } from './views/Login/Login';

function App() {
  const isLoggedIn = useLoginStore((store) => store.isLogged);

  return <>{!isLoggedIn && <Login />}</>;
}

export default App;
