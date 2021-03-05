import React from 'react';
import { ImageProps, Image } from '../Image/Image';
import { ImageIconName, imageIcons } from '../../assets/icons/imageIcons';

export interface ImageIconProps extends Omit<ImageProps, 'src'> {
  icon: ImageIconName;
}

export const ImageIcon = ({ icon, ...rest }: ImageIconProps) => {
  return <Image {...rest} as="img" src={imageIcons[icon]} />;
};
