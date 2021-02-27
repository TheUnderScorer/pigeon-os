import React, { forwardRef, PropsWithChildren } from 'react';
import { Box, BoxProps } from '../../Box/Box';

export interface TreeViewItemProps extends BoxProps {
  selectable?: boolean;
  selected?: boolean;
  value?: any;
  onClick?: (value?: any) => any;
}

const selectedProps: BoxProps = {
  backgroundColor: 'selection',
  color: 'white',
};

export const TreeViewItem = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TreeViewItemProps>
>(({ children, selectable, selected, onClick, value, ...rest }, ref) => {
  return (
    <Box
      {...rest}
      ref={ref}
      pt={2}
      ml={1}
      mr={1}
      pl={2}
      pb={2}
      pr={2}
      userSelect={selectable ? 'none' : rest.userSelect}
      {...(selected ? selectedProps : {})}
      as="li"
      onClick={() => onClick?.(value ?? children?.toString())}
    >
      {children}
    </Box>
  );
});
