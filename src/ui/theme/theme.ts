export interface AppColors {
  surface: string;
  buttonHighlight: string;
  buttonFace: string;
  buttonShadow: string;
  windowFrame: string;
  desktopBlue: string;
  dialogBlue: string;
  dialogBlueLight: string;
  dialogGray: string;
  dialogGrayLight: string;
  linkBlue: string;
  white: string;
  black: string;
  error: string;

  [key: string]: string;
}

export interface AppTheme {
  colors: AppColors;
  shadows: string[];
  space: number[];
  fontSizes: string[];
  breakpoints: string[];
}

export const breakpoints = [768, 1024, 1280, 1440];

export const breakpointsWithPx = breakpoints.map(
  (breakpoint) => `${breakpoint}px`
);

const colors: AppColors = {
  surface: '#c0c0c0',
  buttonHighlight: '#ffffff',
  buttonFace: '#dfdfdf',
  buttonShadow: '#808080',
  windowFrame: '#0a0a0a',
  dialogBlue: '#000080',
  dialogBlueLight: '#1084d0',
  dialogGray: '#808080',
  dialogGrayLight: '#b5b5b5',
  linkBlue: '#0000ff',
  desktopBlue: '#008080',
  white: '#ffffff',
  black: '#000000',
  error: '#e50808',
  selection: '#033562',
};

export const theme: AppTheme = {
  colors,
  //      0  1  2  3  4  5   6   7   8   9   10  11  12  13  14, 15
  space: [0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64],
  breakpoints: breakpointsWithPx,
  fontSizes: [
    '0.625rem', // 0 10px
    '0.75rem', // 1 12px
    '0.875rem', // 2 14px
    '0.9375rem', // 3 15px
    '1rem', // 4 16px
    '1.125rem', // 5 18px
    '1.25rem', // 6 20px
    '1.5rem', // 7 24px
    '1.625rem', // 8 26px
    '1.75rem', // 9 28px
    '2.125rem', // 10 34px
    '3rem', // 11 48px
  ],
  shadows: [
    'none',
    '0px 1px 2px rgba(21, 27, 60, 0.1), 0px 1px 1px rgba(24, 36, 55, 0.15)',
    '0px 2px 4px rgba(21, 27, 60, 0.1), 0px 3px 6px rgba(24, 36, 55, 0.15)',
    '0px 3px 6px rgba(21, 27, 60, 0.1), 0px 10px 20px rgba(24, 36, 55, 0.15)',
    '0px 8px 16px rgba(21, 27, 60, 0.24), 0px 16px 24px rgba(24, 36, 55, 0.24)',
  ],
};
