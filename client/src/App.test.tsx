import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './providers/ThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  it('should render without crashing', () => {
    const cmp = render(
      <ThemeProvider>
        <QueryClientProvider client={new QueryClient()}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </QueryClientProvider>
      </ThemeProvider>
    );

    expect(cmp).toBeDefined();
  });
});
