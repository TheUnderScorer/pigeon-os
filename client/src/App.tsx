import React from 'react';
import { useLoginStore } from './store/loginStore';
import { Login } from './views/Login';
import { Desktop } from './views/Desktop';

function App() {
  const isLoggedIn = useLoginStore((store) => store.isLogged);

  return <>{!isLoggedIn ? <Login /> : <Desktop />}</>;
}

export default App;
