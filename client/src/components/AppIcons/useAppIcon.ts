import { MutableRefObject, useCallback, useRef, useState } from 'react';
import { useClickAway, useTimeoutFn } from 'react-use';
import { useOpenApp } from '../../hooks/useOpenApp';

export const useAppIcon = () => {
  const openApp = useOpenApp();

  const selectedAppRef = useRef<HTMLDivElement>();

  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [shouldUnselectAppOnClick, setShouldUnselectAppOnClick] = useState(
    false
  );

  const [, , resetUnselectInterval] = useTimeoutFn(() => {
    setShouldUnselectAppOnClick(true);
  }, 1000);

  const handleAppSelect = useCallback(
    (appId: string) => () => {
      setSelectedApp((prev) => (prev === appId ? null : appId));

      setShouldUnselectAppOnClick(false);

      resetUnselectInterval();
    },

    [resetUnselectInterval]
  );

  const handleSelectedClick = useCallback(
    (appId: string) => () => {
      if (!shouldUnselectAppOnClick!) {
        openApp(appId);
      }

      setSelectedApp(null);
    },
    [shouldUnselectAppOnClick]
  );

  useClickAway(selectedAppRef as MutableRefObject<HTMLDivElement>, () => {
    setSelectedApp(null);
  });

  return { selectedAppRef, selectedApp, handleAppSelect, handleSelectedClick };
};
