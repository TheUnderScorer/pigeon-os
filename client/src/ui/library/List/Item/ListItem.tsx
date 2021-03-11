import React, { PropsWithChildren, ReactNode } from 'react';
import { Box, BoxProps } from '../../Box/Box';
import styled from '@emotion/styled';

export interface ListItemProps extends Omit<BoxProps, 'as'> {
  icon?: ReactNode;
}

const StyledListItem = styled(Box)`
  list-style: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.selection};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ListItem = ({
  children,
  icon,
  ...props
}: PropsWithChildren<ListItemProps>) => {
  return (
    <StyledListItem
      as="li"
      listStyle="none"
      {...props}
      py={props.py ?? 4}
      px={props.px ?? 4}
    >
      {icon && <Box mr={6}>{icon}</Box>}
      {children}
    </StyledListItem>
  );
};
