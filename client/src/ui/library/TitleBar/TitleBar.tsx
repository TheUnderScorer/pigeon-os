import classNames from 'classnames';
import React, { PropsWithChildren, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { Font } from '../Text/Text.types';

export interface TitleBarProps extends Omit<BoxProps, 'title' | 'as'> {
  title?: string;
  active?: boolean;
  icon?: ReactNode;
}

export const TitleBar = ({
  title,
  children,
  active,
  icon,
  ...props
}: PropsWithChildren<TitleBarProps>) => {
  return (
    <Box
      px={0}
      as="header"
      {...props}
      className={classNames('title-bar', props.className, {
        inactive: !active,
      })}
    >
      <Box
        alignItems="center"
        display="flex"
        width="50%"
        ml={4}
        className="title-bar-text"
      >
        {icon && <Box mr={4}>{icon}</Box>}
        <Text userSelect="none" variant={Font.TitleBarTitle}>
          {title}
        </Text>
      </Box>
      <Box className="title-bar-controls" pr={2}>
        {children}
      </Box>
    </Box>
  );
};
