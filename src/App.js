import { Box, Paper } from '@mui/material';
import React from 'react';

export const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        height: '100vh',
        background: '#f4eeee',
      }}
    >
      <Paper
        sx={{
          minWidth: '800px',
          minHeight: '300px',
          p: 4,
        }}
      >
        App
      </Paper>
    </Box>
  );
};
