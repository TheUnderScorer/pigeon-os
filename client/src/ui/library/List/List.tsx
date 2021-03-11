import React, { PropsWithChildren } from 'react';
import { Box, BoxProps } from '../Box/Box';

export interface ListProps extends Omit<BoxProps, 'as'> {}

export const List = ({ children, ...props }: PropsWithChildren<ListProps>) => {
  return (
    <Box as="ul" margin={0} padding={0} {...props}>
      {children}
    </Box>
  );
};
