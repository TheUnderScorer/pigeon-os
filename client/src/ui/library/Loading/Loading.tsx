import React from 'react';
import { ImageIcon, ImageIconProps } from '../ImageIcon/ImageIcon';

export interface LoadingProps extends Omit<ImageIconProps, 'icon'> {}

export const Loading = (props: LoadingProps) => {
  return <ImageIcon icon="Loading" {...props} />;
};
