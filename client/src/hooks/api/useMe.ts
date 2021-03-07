import { useApiClient } from '../../providers/ApiClientProvider';
import { useQuery } from 'react-query';

export const meQuery = 'me';

export const useMe = () => {
  const { apiClient } = useApiClient();

  return useQuery(meQuery, () => apiClient.getMe(), {
    refetchOnWindowFocus: false,
    retry: 2,
  });
};
