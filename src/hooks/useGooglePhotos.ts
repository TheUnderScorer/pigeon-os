import { useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { MediaItemsRequest, MediaItemsResponse } from '../types/googlePhotos';

export const googlePhotosQueryKey = 'googlePhotos';

export const useGooglePhotos = () => {
  const [didInit, setDidInit] = useState(false);

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY!;
  const accessToken = process.env.REACT_APP_GOOGLE_PHOTOS_ACCESS_TOKEN!;
  const refreshToken = process.env.REACT_APP_GOOGLE_PHOTOS_REFRESH_TOKEN;

  const getPhotos = useCallback(async (request?: MediaItemsRequest) => {
    const response = await gapi.client.request({
      path: 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
      body: {
        albumId: process.env.REACT_APP_GOOGLE_PHOTOS_ALBUM_ID,
        ...request,
      },
      method: 'POST',
    });

    return JSON.parse(response.body);
  }, []);

  const query = useInfiniteQuery<MediaItemsResponse, MediaItemsRequest>(
    googlePhotosQueryKey,
    (data) => getPhotos({ pageToken: data.pageParam }),
    {
      enabled: didInit,
      getNextPageParam: (data) => {
        return data.nextPageToken;
      },
    }
  );

  useEffect(() => {
    if (!didInit) {
      gapi.load('client', async () => {
        gapi.client.setApiKey(apiKey);

        gapi.client.setToken({
          access_token: accessToken,
        });

        setDidInit(true);

        await query.refetch();
      });
    }
  }, [accessToken, apiKey, didInit, query, refreshToken]);

  return {
    query,
    isReady: didInit,
  };
};
