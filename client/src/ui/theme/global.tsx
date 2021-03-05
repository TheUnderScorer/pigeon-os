import { css, Global } from '@emotion/react';

export const globalStyle = css`
  html {
    font-size: 13px;
    margin: 0;
    padding: 0;
    overflow: visible;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Pixelated MS Sans Serif', Arial;
    overflow: hidden;
  }

  .react-resizable-handle {
    opacity: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const GlobalStyle = () => <Global styles={globalStyle} />;
