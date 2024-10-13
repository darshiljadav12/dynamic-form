import React from 'react';
import Typography from '@mui/material/Typography';

import { Container, Form } from './components';
import { formObj } from './constants';

export const App = () => {
  const { form } = formObj;

  return (
    <Container>
      <Typography variant="h5" fontWeight={600}>
        {form.title}
      </Typography>

      <Typography variant="body1">{form.description}</Typography>

      <Form form={form} />
    </Container>
  );
};
