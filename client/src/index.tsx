import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './providers/ThemeProvider';
import '98.css/dist/98.css';
import 'react-resizable/css/styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ApiClientProvider } from './providers/ApiClientProvider';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApiClientProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ApiClientProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
