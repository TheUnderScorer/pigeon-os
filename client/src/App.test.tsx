import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './providers/ThemeProvider';

describe('<App />', () => {
  it('should render without crashing', () => {
    const cmp = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    expect(cmp).toBeDefined();
  });
});
