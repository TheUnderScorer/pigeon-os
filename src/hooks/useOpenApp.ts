import { useAppStatesStore } from '../store/appStatesStore';

export const useOpenApp = () => {
  return useAppStatesStore((store) => store.addOpenedApp);
};
