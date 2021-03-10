import BootGif from '../ui/assets/boot.gif';
import { Image } from '../ui/library/Image/Image';
import { useIsAuthorized } from '../hooks/api/useIsAuthorized';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { clientRoutes } from '@lib/clientRoutes';
import { useTimeoutFn } from 'react-use';

export const Boot = () => {
  const { isAuthorized, isLoading } = useIsAuthorized();

  const history = useHistory();

  const [, , startRedirectTimeout] = useTimeoutFn(() => {
    if (isLoading) {
      return;
    }

    history.push(isAuthorized ? clientRoutes.desktop : clientRoutes.login);
  }, 2000);

  useEffect(() => {
    if (!isLoading) {
      startRedirectTimeout();
    }
  }, [isLoading, startRedirectTimeout]);

  return <Image src={BootGif} width="100vw" height="100vh" />;
};
