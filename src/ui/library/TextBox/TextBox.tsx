import React, { HTMLAttributes } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { Font } from '../Text/Text.types';
import styled from '@emotion/styled';

export interface TextBoxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  stacked?: boolean;
  BoxProps?: Omit<BoxProps, 'as'>;
}

const StyledLabel = styled.label`
  color: inherit;
`;

const StyledInput = styled.input`
  color: inherit;
`;

export const TextBox = ({
  label,
  stacked,
  BoxProps,
  ...props
}: TextBoxProps) => {
  return (
    <Box className={stacked ? 'field-row' : 'field-row-stacked'} {...BoxProps}>
      {label && props.id && (
        <StyledLabel htmlFor={props.id}>
          <Text color="inherit" variant={Font.DesktopTextBody}>
            {label}
          </Text>
        </StyledLabel>
      )}
      <StyledInput {...props} type="text" />
    </Box>
  );
};
