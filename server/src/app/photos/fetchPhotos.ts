import Photos from 'googlephotos';
import { FetchPhotosPayload } from '@lib/schema/photos/FetchPhotosPayload';

export interface FetchPhotosDependencies {
  googlePhotos: Photos;
  googlePhotosAlbumId: string;
}

export const makeFetchPhotos = ({
  googlePhotos,
  googlePhotosAlbumId,
}: FetchPhotosDependencies) => async (payload?: FetchPhotosPayload) => {
  return googlePhotos.mediaItems.search(
    googlePhotosAlbumId,
    15,
    payload?.nextPageToken
  );
};

export type FetchPhotos = ReturnType<typeof makeFetchPhotos>;
