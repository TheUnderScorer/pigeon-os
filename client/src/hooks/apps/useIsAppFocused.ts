import { useAppStatesStore } from '../../store/appStatesStore';

export const useIsAppFocused = (appId: string) => {
  return useAppStatesStore((store) => store.focusedAppId) === appId;
};
