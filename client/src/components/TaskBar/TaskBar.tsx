import React from 'react';
import { Box, Flex } from '../../ui/library/Box/Box';
import { Button } from '../../ui/library/Button/Button';
import { ImageIcon } from '../../ui/library/ImageIcon/ImageIcon';
import { PigeonOsApp } from '../../types/apps';
import { TaskBarApp } from './App/TaskBarApp';
import { useAppStatesStore } from '../../store/appStatesStore';
import { useTheme } from '@emotion/react';
import { TaskBarStart } from './Start/TaskBarStart';

export interface TaskBarProps {
  apps: PigeonOsApp[];
}

export const TaskBar = ({ apps }: TaskBarProps) => {
  const theme = useTheme();

  const openedAppIds = useAppStatesStore((store) => store.openedAppIds);

  const openedApps = apps.filter((app) => openedAppIds.includes(app.id));

  return (
    <Flex
      py={1}
      px={2}
      zIndex={theme.zIndexes.taskBar}
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
      <TaskBarStart />
      <Flex ml={4}>
        {openedApps.map((app) => (
          <Box key={app.id} ml={2}>
            <TaskBarApp {...app} />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
