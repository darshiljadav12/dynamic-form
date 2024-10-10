import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
