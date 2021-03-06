import React from 'react';
import { Box } from '../ui/library/Box/Box';
import { TaskBar } from '../components/TaskBar/TaskBar';
import { AppIcons } from '../components/AppIcons/AppIcons';
import { apps } from '../apps/apps';
import { AppWindowsManager } from '../components/AppWindowsManager/AppWindowsManager';

export const Desktop = () => {
  return (
    <>
      <AppWindowsManager apps={apps} />
      <Box position="relative" bg="desktopBlue" height="100vh" width="100vw">
        <Box padding={4} width="100%" height="calc(100% - 30px)">
          <AppIcons apps={apps} />
        </Box>

        <TaskBar apps={apps} />
      </Box>
    </>
  );
};
