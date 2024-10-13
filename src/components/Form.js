import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { RenderField } from './RenderField';
import { useFormValidations } from '../hooks';

export const Form = ({ form }) => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {};
  });

  const [formErrors, setFormErrors] = useState({});

  const { validateForm } = useFormValidations();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateForm(form, formData, setFormErrors);

    if (!isFormValid) {
      alert('Please fix the errors in the form.');
      return;
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data saved!');
    return;
  };

  const handleReset = () => {
    setFormData({});
    localStorage.removeItem('formData');
  };

  return (
    <>
      {form.groups.map((item, index) => (
        <Box key={item.title}>
          {Boolean(index) && <Divider />}

          <Box py={2}>
            <Typography variant="body1" fontWeight={600} pt={1}>
              {item.title}
            </Typography>

            {item.fields.map((field) => (
              <RenderField
                key={field.name}
                field={field}
                formData={formData}
                setFormData={setFormData}
                formErrors={formErrors}
                setFormErrors={setFormErrors}
              />
            ))}
          </Box>
        </Box>
      ))}

      <Box mt={4} display="flex" gap={1}>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </>
  );
};
