import Photos from 'googlephotos';

export interface CreatePhotosDependencies {
  googleAccessToken: string;
}

export const createPhotos = ({
  googleAccessToken,
}: CreatePhotosDependencies) => {
  return new Photos(googleAccessToken);
};
