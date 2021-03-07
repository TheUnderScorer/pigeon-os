import { useAppStatesStore } from '../../store/appStatesStore';
import { useAppRefsStore } from '../../store/appRefsStore';
import { useCallback } from 'react';

export const useCloseApp = (id: string) => {
  const close = useAppStatesStore((store) => store.removeOpenedApp);
  const removeRef = useAppRefsStore((store) => store.removeRef);

  return useCallback(() => {
    removeRef(id);

    close(id);
  }, [close, id, removeRef]);
};
