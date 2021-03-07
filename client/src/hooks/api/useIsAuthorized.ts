import { useMe } from './useMe';

export const useIsAuthorized = () => {
  const getMeQuery = useMe();

  return {
    isAuthorized: Boolean(getMeQuery.data?.userName),
    isLoading: getMeQuery.isLoading,
  };
};
