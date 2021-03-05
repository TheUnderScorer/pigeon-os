import '@emotion/react';
import { AppTheme } from '../ui/theme/theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
