import { useInfiniteQuery } from 'react-query';
import { MediaItemsResponse } from '@lib/types/googlePhotos';
import { useApiClient } from '../../providers/ApiClientProvider';
import { ApiError } from '../../api/ApiError';
import { FetchPhotosPayload } from '@lib/schema/photos/FetchPhotosPayload';

export const googlePhotosQueryKey = 'googlePhotos';

export const useGooglePhotos = () => {
  const { apiClient } = useApiClient();

  return useInfiniteQuery<FetchPhotosPayload, ApiError, MediaItemsResponse>({
    queryKey: googlePhotosQueryKey,
    queryFn: (context) =>
      apiClient.getPhotos({ nextPageToken: context.pageParam }),
    getNextPageParam: (data) => data.nextPageToken,
    retry: false,
  });
};
