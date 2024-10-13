import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import React from 'react';
import { styled, css } from '@mui/material';

export const Container = ({ children }) => {
  return (
    <Box>
      <Paper>{children}</Paper>
    </Box>
  );
};

const Box = styled(MuiBox)(css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  min-height: 100vh;
  background: #f4eeee;
  width: 100%;
`);

const Paper = styled(MuiPaper)(css`
  max-width: 800px;
  width: 100%;
  padding: 32px;
`);
