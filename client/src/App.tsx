import { Login } from './views/Login';
import { Desktop } from './views/Desktop';
import { useIsAuthorized } from './hooks/api/useIsAuthorized';
import { Route, Switch } from 'react-router-dom';
import { clientRoutes } from '@lib/clientRoutes';
import { Boot } from './views/Boot';

function App() {
  const { isAuthorized } = useIsAuthorized();

  return (
    <Switch>
      <Route path={clientRoutes.boot} exact>
        <Boot />
      </Route>
      {isAuthorized && (
        <Route path={clientRoutes.desktop}>
          <Desktop />
        </Route>
      )}
      <Route path={clientRoutes.login}>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
