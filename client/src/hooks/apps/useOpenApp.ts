import { useAppStatesStore } from '../../store/appStatesStore';
import { useCallback } from 'react';
import { useAppRefsStore } from '../../store/appRefsStore';

export const useOpenApp = () => {
  const openedApps = useAppStatesStore((store) => store.openedAppIds);
  const addOpenedApp = useAppStatesStore((store) => store.addOpenedApp);
  const appRefs = useAppRefsStore((store) => store.refs);

  return useCallback(
    (appId: string) => {
      if (!openedApps.includes(appId) || !appRefs[appId]) {
        return addOpenedApp(appId);
      }

      appRefs[appId].focus();
    },
    [addOpenedApp, appRefs, openedApps]
  );
};
