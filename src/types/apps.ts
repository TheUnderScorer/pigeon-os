import { ImageIconName } from '../ui/assets/icons/imageIcons';
import { ReactNode } from 'react';

export interface PigeonOsApp {
  name: string;
  id: string;
  icon: ImageIconName;
  content: ReactNode;
}
