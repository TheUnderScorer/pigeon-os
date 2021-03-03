import React from 'react';
import { Flex } from '../../ui/library/Box/Box';
import { Button } from '../../ui/library/Button/Button';
import { ImageIcon } from '../../ui/library/ImageIcon/ImageIcon';
import { PigeonOsApp } from '../../types/apps';
import { TaskBarApp } from './App/TaskBarApp';
import { useAppStatesStore } from '../../store/appStatesStore';
import { Text } from '../../ui/library/Text/Text';

export interface TaskBarProps {
  apps: PigeonOsApp[];
}

export const TaskBar = ({ apps }: TaskBarProps) => {
  const openedAppIds = useAppStatesStore((store) => store.openedAppIds);

  const openedApps = apps.filter((app) => openedAppIds.includes(app.id));

  return (
    <Flex
      py={1}
      px={2}
      zIndex={6}
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
      <Flex ml={4}>
        {openedApps.map((app) => (
          <TaskBarApp {...app} />
        ))}
      </Flex>
    </Flex>
  );
};
