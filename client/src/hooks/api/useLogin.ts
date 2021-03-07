import { useMutation, useQueryClient } from 'react-query';
import { useApiClient } from '../../providers/ApiClientProvider';
import { LoginResult } from '@lib/types/user';
import { LoginInput } from '@lib/schema/auth/LoginInput';
import { useTokensStore } from '../../store/tokensStore';
import { ApiError } from '../../api/ApiError';
import { meQuery } from './useMe';

export const useLogin = () => {
  const client = useQueryClient();

  const { apiClient } = useApiClient();
  const setToken = useTokensStore((store) => store.setToken);

  return useMutation<LoginResult, ApiError, LoginInput>(
    async (variables) => apiClient.login(variables),
    {
      onSuccess: async (data) => {
        if (data.token) {
          setToken(data.token);
          apiClient.setToken(data.token);

          await client.invalidateQueries({
            queryKey: meQuery,
          });
        }
      },
    }
  );
};
