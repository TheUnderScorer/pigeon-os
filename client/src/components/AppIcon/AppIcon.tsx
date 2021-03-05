import React, { forwardRef } from 'react';
import { PigeonOsApp } from '../../types/apps';
import { Flex } from '../../ui/library/Box/Box';
import { ImageIcon } from '../../ui/library/ImageIcon/ImageIcon';
import { Text } from '../../ui/library/Text/Text';

export interface AppIconProps extends Pick<PigeonOsApp, 'icon' | 'name'> {
  selected?: boolean;
  onClick?: () => any;
  onSelectedClick?: () => any;
}

export const AppIcon = forwardRef<HTMLDivElement, AppIconProps>(
  ({ icon, name, onClick, onSelectedClick, selected }, ref) => {
    return (
      <Flex
        ref={ref}
        cursor="pointer"
        onClick={selected ? onSelectedClick : onClick}
        backgroundColor={selected ? 'selection' : undefined}
        padding={2}
        width={60}
        alignItems="center"
        flexDirection="column"
      >
        <ImageIcon mb={3} width={30} icon={icon} />
        <Text userSelect="none" color="white">
          {name}
        </Text>
      </Flex>
    );
  }
);
