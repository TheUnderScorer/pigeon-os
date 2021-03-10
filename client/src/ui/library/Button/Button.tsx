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
        [ButtonVariants.SolidInserted]: {
          boxShadow:
            'inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey',
          padding: '2px 11px 0 13px',
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
