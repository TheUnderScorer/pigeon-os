import { ApiClient } from '../api/ApiClient';
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { useTokensStore } from '../store/tokensStore';

export interface ApiClientContext {
  apiClient: ApiClient;
}

const Context = createContext<ApiClientContext>({} as any);

export const useApiClient = () => useContext(Context);

export const ApiClientProvider = ({
  apiClient: providedApiClient,
  children,
}: PropsWithChildren<Partial<ApiClientContext>>) => {
  const token = useTokensStore((store) => store.token);

  const apiClient = useMemo(() => {
    const apiClient =
      providedApiClient ?? new ApiClient(process.env.REACT_APP_API_URL!);

    apiClient.setToken(token);

    return apiClient;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providedApiClient]);

  useEffect(() => {
    apiClient.setToken(token);
  }, [apiClient, token]);

  return <Context.Provider value={{ apiClient }}>{children}</Context.Provider>;
};
