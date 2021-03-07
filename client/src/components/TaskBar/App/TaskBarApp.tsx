import React from 'react';
import { PigeonOsApp } from '../../../types/apps';
import { Button } from '../../../ui/library/Button/Button';
import { Text } from '../../../ui/library/Text/Text';
import { ImageIcon } from '../../../ui/library/ImageIcon/ImageIcon';
import { useIsAppFocused } from '../../../hooks/apps/useIsAppFocused';
import { ButtonVariants } from '../../../ui/library/Button/Button.types';
import { useAppRef } from '../../../hooks/apps/useAppRef';

export interface TaskBarAppProps extends PigeonOsApp {}

export const TaskBarApp = ({ id, icon, name }: TaskBarAppProps) => {
  const ref = useAppRef(id);

  const isFocused = useIsAppFocused(id);

  return (
    <Button
      width={120}
      variant={isFocused ? ButtonVariants.SolidInserted : ButtonVariants.Solid}
      id={`app_${id}_task_bar_btn`}
      display="flex"
      alignItems="center"
      onClick={() => ref?.focus()}
    >
      <ImageIcon width={20} icon={icon} />
      <Text ml={4}>{name}</Text>
    </Button>
  );
};
