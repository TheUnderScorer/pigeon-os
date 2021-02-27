import { AppTheme } from '../../theme/theme';
import {
  alignSelf,
  AlignSelfProps,
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import {
  CursorProperty,
  OverflowWrapProperty,
  TextDecorationProperty,
  TextOverflowProperty,
  TextTransformProperty,
  UserSelectProperty,
  WhiteSpaceProperty,
  WordBreakProperty,
} from 'csstype';
import { Font } from './Text.types';

type TextEllipsisProps = {
  ellipsis?: boolean;
};

type TextHighlightProps = {
  highlight?: boolean;
};

type TextMultilineProps = {
  multiline?: boolean;
};

export type TextProps = ColorProps<AppTheme> &
  HTMLAttributes<HTMLSpanElement> &
  AlignSelfProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  TextEllipsisProps &
  TextHighlightProps &
  TextMultilineProps & {
    as?: keyof HTMLElementTagNameMap;
    overflowWrap?: OverflowWrapProperty;
    cursor?: CursorProperty;
    textDecoration?: TextDecorationProperty<string | 0>;
    textOverflow?: TextOverflowProperty;
    textTransform?: TextTransformProperty;
    wordBreak?: WordBreakProperty;
    userSelect?: UserSelectProperty;
    whiteSpace?: WhiteSpaceProperty;
    variant?: Font | Font[];
  };

const textEllipsis = ({ ellipsis }: TextEllipsisProps) =>
  ellipsis
    ? ({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      } as const)
    : {};

const textMultiline = ({ multiline }: TextMultilineProps) =>
  multiline ? ({ whiteSpace: 'pre-wrap' } as const) : {};

const textHighlight = ({ highlight }: TextHighlightProps) =>
  highlight
    ? ({
        '> mark': { fontWeight: 700, backgroundColor: 'transparent' },
      } as const)
    : {};

const textVariants: Record<Font, Omit<TextProps, 'variant'>> = {
  [Font.DesktopDisplayBig]: {
    fontSize: 10,
    lineHeight: 1.41,
    fontWeight: 700,
  },
  [Font.DesktopDisplayMedium]: {
    fontSize: 7,
    lineHeight: 1.33,
    fontWeight: 700,
  },
  [Font.DesktopDisplaySmall]: {
    fontSize: 6,
    lineHeight: 1.2,
    fontWeight: 700,
  },
  [Font.DesktopSubheadingBig]: {
    fontSize: 5,
    lineHeight: 1.33,
    fontWeight: 400,
  },
  [Font.DesktopTextBody]: {
    fontSize: 2,
    lineHeight: 1.5,
    fontWeight: 400,
  },
  [Font.TitleBarTitle]: {
    fontWeight: 700,
    fontSize: 2,
  },
};

export const Text = styled.span<TextProps>(
  compose(
    alignSelf,
    color,
    layout,
    typography,
    space,
    variant({
      variants: textVariants,
    }),
    system({
      overflowWrap: true,
      cursor: true,
      textDecoration: true,
      textOverflow: true,
      textTransform: true,
      userSelect: true,
      whiteSpace: true,
      wordBreak: true,
    })
  ),
  textEllipsis,
  textHighlight,
  textMultiline
);
