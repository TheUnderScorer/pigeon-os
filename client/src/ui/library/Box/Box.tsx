import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import {
  background,
  backgroundImage,
  BackgroundImageProps,
  BackgroundProps,
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
} from 'styled-system';
import { AppTheme } from '../../theme/theme';
import {
  BackdropFilterProperty,
  ColumnCountProperty,
  ColumnGapProperty,
  ColumnRuleColorProperty,
  ColumnRuleProperty,
  CursorProperty,
  PointerEventsProperty,
  ResizeProperty,
  TransformProperty,
  TransitionProperty,
  UserSelectProperty,
} from 'csstype';

export type BoxProps = ColorProps<AppTheme> &
  HTMLAttributes<HTMLDivElement> &
  BackgroundProps &
  BackgroundImageProps &
  BorderProps &
  BoxShadowProps &
  FlexboxProps &
  LayoutProps &
  GridProps &
  PositionProps &
  SpaceProps & {
    visibility?: string;
    as?: string;
    transition?: TransitionProperty;
    pointerEvents?: PointerEventsProperty;
    cursor?: CursorProperty;
    backdropFilter?: BackdropFilterProperty;
    transform?: TransformProperty;
    columnCount?: ColumnCountProperty | Array<number>;
    columnGap?: ColumnGapProperty<number>;
    columnRule?: ColumnRuleProperty<string>;
    columnRuleColor?: ColumnRuleColorProperty;
    theme?: AppTheme;
    userSelect?: UserSelectProperty;
    resize?: ResizeProperty;
    href?: string;
    target?: string;
  };

export const Box = styled.div<BoxProps>(
  compose(
    background,
    backgroundImage,
    border,
    boxShadow,
    color,
    flexbox,
    grid,
    layout,
    position,
    space,
    system({
      visibility: true,
      cursor: true,
      pointerEvents: true,
      transition: true,
      transform: true,
      backdropFilter: true,
      columnCount: true,
      columnGap: true,
      columnRule: true,
      userSelect: true,
      resize: true,
      columnRuleColor: {
        property: 'columnRuleColor',
        scale: 'colors',
      },
    })
  )
);

export const Flex = styled(Box)<BoxProps>`
  display: flex;
`;
