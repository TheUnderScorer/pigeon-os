import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { Font } from '../Text/Text.types';

export interface TitleBarProps extends Omit<BoxProps, 'title' | 'as'> {
  title?: string;
  active?: boolean;
}

export const TitleBar = ({
  title,
  children,
  active,
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
      <Box ml={4} className="title-bar-text">
        <Text variant={Font.TitleBarTitle}>{title}</Text>
      </Box>
      {children}
    </Box>
  );
};
