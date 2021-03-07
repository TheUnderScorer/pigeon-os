import React, { Fragment } from 'react';
import { Box } from '../../ui/library/Box/Box';
import { Loading } from '../../ui/library/Loading/Loading';
import { useGooglePhotos } from '../../hooks/api/useGooglePhotos';
import { Centered } from '../../ui/library/Centered/Centered';
import { Image } from '../../ui/library/Image/Image';
import { Text } from '../../ui/library/Text/Text';

export interface PhotosProps {}

export const Photos = (props: PhotosProps) => {
  const query = useGooglePhotos();

  return (
    <Box height="100%" display="flex">
      {query.isLoading && !query.isFetchedAfterMount && (
        <Centered>
          <Loading width={80} />
        </Centered>
      )}
      {query.error && !query.isLoading && (
        <Centered>
          <Text color="error">
            Failed to fetch photos: {query.error.message}
          </Text>
        </Centered>
      )}
      <Box
        justifyContent="center"
        display="flex"
        flexWrap="wrap"
        overflow="auto"
        flex={1}
      >
        {query.data?.pages?.map((page) => (
          <Fragment key={page.nextPageToken}>
            {page.mediaItems.map((mediaItem) => (
              <Box
                as="a"
                key={mediaItem.id}
                href={mediaItem.productUrl}
                target="__blank"
                maxWidth="30%"
                width="auto"
                maxHeight="50%"
                padding={2}
              >
                <Image
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  src={mediaItem.baseUrl}
                />
              </Box>
            ))}
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};
