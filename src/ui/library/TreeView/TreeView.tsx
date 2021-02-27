import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { Box, BoxProps } from '../Box/Box';

export interface TreeViewProps extends BoxProps {}

export const TreeView = ({
  children,
  ...rest
}: PropsWithChildren<TreeViewProps>) => {
  return (
    <Box {...rest} as="ul" className={classNames('tree-view', rest.className)}>
      {children}
    </Box>
  );
};
