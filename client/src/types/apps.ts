import { ImageIconName } from '../ui/assets/icons/imageIcons';

export interface PigeonOsApp<Args = any> {
  name: string;
  id: string;
  icon: ImageIconName;
  content: (props?: Args) => JSX.Element;
}
