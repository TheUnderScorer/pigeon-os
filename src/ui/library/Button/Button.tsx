import React from 'react';
import styled from '@emotion/styled';
import {
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  system,
  variant,
} from 'styled-system';
import { CursorProperty, PointerEventsProperty } from 'csstype';
import { AppTheme } from '../../theme/theme';
import { ButtonVariants } from './Button.types';

export const Button = styled.button<ButtonProps>(
  {
    boxSizing: 'border-box',
    cursor: 'pointer',
    ':disabled': {
      cursor: 'auto',
    },
  },

  compose(
    grid,
    border,
    boxShadow,
    color,
    flexbox,
    layout,
    space,
    position,
    system({
      cursor: true,
      pointerEvents: true,
      transition: true,
      transform: true,
      backdropFilter: true,
    }),
    variant({
      variants: {
        [ButtonVariants.Outlined]: {
          bg: 'transparent',
        },
      },
    })
  )
);

export type ButtonProps = GridProps &
  BorderProps &
  BoxShadowProps &
  ColorProps<AppTheme> &
  LayoutProps &
  FlexboxProps &
  SpaceProps &
  PositionProps & {
    cursor?: CursorProperty;
    pointerEvents?: PointerEventsProperty;
    variant?: ButtonVariants;
  };
