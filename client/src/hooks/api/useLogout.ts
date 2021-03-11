import { useCallback } from 'react';
import { useTokensStore } from '../../store/tokensStore';
import { useHistory } from 'react-router-dom';
import { clientRoutes } from '@lib/clientRoutes';

export const useLogout = () => {
  const history = useHistory();
  const setToken = useTokensStore((store) => store.setToken);

  return useCallback(() => {
    setToken(undefined);

    history.push(clientRoutes.login);
  }, [history, setToken]);
};
