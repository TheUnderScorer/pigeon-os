import React, { Fragment } from 'react';
import { Box } from '../../ui/library/Box/Box';
import { Loading } from '../../ui/library/Loading/Loading';
import { useGooglePhotos } from '../../hooks/useGooglePhotos';
import { Centered } from '../../ui/library/Centered/Centered';
import { Image } from '../../ui/library/Image/Image';
import { Text } from '../../ui/library/Text/Text';

export interface PhotosProps {}

export const Photos = (props: PhotosProps) => {
  const { query, isReady } = useGooglePhotos();

  return (
    <Box height="100%">
      {!isReady ||
        (query.isLoading && !query.isFetchedAfterMount && (
          <Centered>
            <Loading width={100} />
          </Centered>
        ))}
      {query.error && <Text color="error">{query.error}</Text>}
      {query.data?.pages.map((page) => (
        <Fragment key={page.nextPageToken}>
          {page.mediaItems.map((mediaItem) => (
            <Image key={mediaItem.id} src={mediaItem.baseUrl} />
          ))}
        </Fragment>
      ))}
    </Box>
  );
};
