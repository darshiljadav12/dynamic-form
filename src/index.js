import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: '#090909',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: '#090909',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '12px',
          padding: '10px',

          '::placeholder': {
            color: '#9CAABD',
            opacity: 1,
          },
        },
      },
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
