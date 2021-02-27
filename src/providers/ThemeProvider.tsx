import React, { PropsWithChildren } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from '../ui/theme/theme';
import { GlobalStyle } from '../ui/theme/global';

export interface ThemeProviderProps {}

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </EmotionThemeProvider>
  );
};
