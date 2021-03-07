import React, { MutableRefObject } from 'react';
import { PigeonOsApp } from '../../types/apps';
import { Box, Flex } from '../../ui/library/Box/Box';
import { AppIcon } from '../AppIcon/AppIcon';
import { useAppIcon } from './useAppIcon';

export interface AppIconsProps {
  apps: PigeonOsApp[];
}

export const AppIcons = ({ apps }: AppIconsProps) => {
  const {
    selectedAppRef,
    selectedApp,
    handleAppSelect,
    handleSelectedClick,
  } = useAppIcon();

  return (
    <Flex flexDirection="column">
      {apps.map((app) => (
        <Box key={app.id} mb={3}>
          <AppIcon
            ref={
              selectedApp === app.id
                ? (selectedAppRef as MutableRefObject<HTMLDivElement>)
                : undefined
            }
            selected={selectedApp === app.id}
            onClick={handleAppSelect(app.id)}
            onSelectedClick={handleSelectedClick(app.id)}
            key={app.id}
            name={app.name}
            icon={app.icon}
          />
        </Box>
      ))}
    </Flex>
  );
};
