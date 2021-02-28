import React from 'react';
import { Box } from '../../ui/library/Box/Box';
import { Button } from '../../ui/library/Button/Button';
import { ImageIcon } from '../../ui/library/ImageIcon/ImageIcon';

export interface TaskBarProps {}

export const TaskBar = (props: TaskBarProps) => {
  return (
    <Box
      py={1}
      px={2}
      zIndex={2}
      position="absolute"
      bottom={0}
      as="div"
      width="100%"
      height={25}
      bg="silver"
      borderTop="1px"
      borderTopStyle="solid"
      borderTopColor="lightGrey"
      boxShadow="inset 1px 0 #fff"
    >
      <Button px={4} minWidth="0">
        <ImageIcon width={50} icon="StartButton" />
      </Button>
    </Box>
  );
};
