import React from 'react';
import { Text } from '../../ui/library/Text/Text';
import { Centered } from '../../ui/library/Centered/Centered';
import Pigeon from '../../ui/assets/pigeon.png';
import { Image } from '../../ui/library/Image/Image';
import { Font } from '../../ui/library/Text/Text.types';

export const ThisPc = () => {
  return (
    <Centered flexDirection="column">
      <Image src={Pigeon} width={100} />
      <Text variant={Font.DesktopDisplayBig}>Pigeon OS</Text>
      <Text variant={Font.DesktopDisplayMedium}>
        Version: {process.env.REACT_APP_VERSION}
      </Text>
      <Text
        fontWeight="normal"
        variant={Font.DesktopDisplaySmall}
        marginTop={8}
      >
        Made with ❤ for Pigeon
      </Text>
    </Centered>
  );
};
