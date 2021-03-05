import { useCallback, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { MediaItemsRequest, MediaItemsResponse } from '../types/googlePhotos';

export const googlePhotosQueryKey = 'googlePhotos';

export const useGooglePhotos = () => {
  const [didInit, setDidInit] = useState(false);

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

  const query = useInfiniteQuery<
    MediaItemsResponse,
    MediaItemsRequest,
    MediaItemsResponse
  >(googlePhotosQueryKey, (data) => getPhotos({ pageToken: data.pageParam }), {
    enabled: didInit,
    getNextPageParam: (data) => {
      return data.nextPageToken;
    },
  });

  return {
    query,
    isReady: didInit,
  };
};
