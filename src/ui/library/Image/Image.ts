import styled from '@emotion/styled';
import { Box, BoxProps } from '../Box/Box';
import { ImageRenderingProperty, ObjectFitProperty } from 'csstype';

export interface ImageProps extends BoxProps {
  imageRendering?: ImageRenderingProperty;
  objectFit?: ObjectFitProperty;
  src?: string;
}

export const Image = styled(Box)<ImageProps>`
  image-rendering: pixelated;
  width: 100%;
`;
