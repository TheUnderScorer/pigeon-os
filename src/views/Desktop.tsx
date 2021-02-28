import React from 'react';
import { Box } from '../ui/library/Box/Box';
import { TaskBar } from '../components/TaskBar/TaskBar';

export interface DesktopProps {}

export const Desktop = (props: DesktopProps) => {
  return (
    <Box position="relative" bg="desktopBlue" height="100vh" width="100vw">
      <TaskBar />
    </Box>
  );
};
