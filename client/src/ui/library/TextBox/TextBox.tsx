import React, { HTMLAttributes } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';
import { Font } from '../Text/Text.types';
import styled from '@emotion/styled';
import { Controller, ControllerProps, UseFormMethods } from 'react-hook-form';
import { get } from 'lodash';
import classNames from 'classnames';

export interface TextBoxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  stacked?: boolean;
  type?: string;
  BoxProps?: Omit<BoxProps, 'as'>;
  id: string;
  form: UseFormMethods<any>;
  ControllerProps?: Pick<ControllerProps<any>, 'defaultValue' | 'rules'>;
}

const StyledLabel = styled.label`
  color: inherit;
`;

const StyledInput = styled.input`
  color: inherit;
  width: 100%;
  flex: 1;
  height: 12px !important;
  line-height: 1 !important;

  &.hasError {
    border: 1px solid ${(props) => props.theme.colors.error};
  }
`;

export const TextBox = ({
  label,
  stacked,
  BoxProps,
  type = 'text',
  form,
  ControllerProps,
  ...props
}: TextBoxProps) => {
  const error = get(form.errors, props.id);
  const hasError = Boolean(error);

  return (
    <Box
      flexWrap="wrap"
      className={stacked ? 'field-row' : 'field-row-stacked'}
      {...BoxProps}
    >
      {label && props.id && (
        <StyledLabel htmlFor={props.id}>
          <Text
            color={hasError ? 'error' : 'inherit'}
            variant={Font.DesktopTextBody}
          >
            {label}
          </Text>
        </StyledLabel>
      )}
      <Controller
        control={form.control}
        name={props.id}
        render={(controllerProps) => (
          <StyledInput
            {...controllerProps}
            {...props}
            type={type}
            className={classNames({ hasError })}
          />
        )}
        {...ControllerProps}
      />
      {hasError && (
        <Text ml={0} mt={4} width="100%" color="error">
          {error.message}
        </Text>
      )}
    </Box>
  );
};
