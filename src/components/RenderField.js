import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useFormValidations } from '../hooks';

export const RenderField = ({
  field,
  formData,
  setFormData,
  formErrors,
  setFormErrors,
}) => {
  const { label, type, name, options, placeholder, required, min, max, step } =
    field;

  const value = formData[name] || '';

  const { validateField } = useFormValidations();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newValue = value;

    if (type === 'checkbox') {
      newValue = checked
        ? [...(formData[name] || []), value]
        : (formData[name] || []).filter((v) => v !== value);
    }

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));

    const error = validateField(field, newValue);
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const renderError = () =>
    formErrors[name] && (
      <FormHelperText error>{formErrors[name]}</FormHelperText>
    );

  if (type === 'text' || type === 'number') {
    return (
      <FormControl fullWidth margin="normal" error={!!formErrors[name]}>
        <TextField
          label={label}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          inputProps={{ min, max }}
        />
        {renderError()}
      </FormControl>
    );
  }

  if (type === 'textarea') {
    return (
      <FormControl fullWidth margin="normal" error={!!formErrors[name]}>
        <TextField
          label={label}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        {renderError()}
      </FormControl>
    );
  }

  if (type === 'dropdown') {
    return (
      <FormControl fullWidth margin="normal" error={!!formErrors[name]}>
        <TextField
          select
          label={label}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          {options.map((option, idx) => (
            <MenuItem key={idx} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {renderError()}
      </FormControl>
    );
  }

  if (type === 'radio') {
    return (
      <FormControl fullWidth margin="normal" error={!!formErrors[name]}>
        <Typography>
          {label} {required ? '*' : ''}
        </Typography>
        <RadioGroup name={name} value={value} onChange={handleChange}>
          {options.map((option, idx) => (
            <FormControlLabel
              key={idx}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
        {renderError()}
      </FormControl>
    );
  }

  if (type === 'checkbox') {
    return (
      <FormControl fullWidth margin="normal" error={!!formErrors[name]}>
        <Typography>{label}</Typography>
        {options.map((option, idx) => (
          <FormControlLabel
            key={idx}
            control={
              <Checkbox
                checked={formData[name]?.includes(option.value)}
                onChange={handleChange}
                value={option.value}
              />
            }
            label={option.label}
          />
        ))}
        {renderError()}
      </FormControl>
    );
  }

  if (type === 'slider') {
    return (
      <FormControl fullWidth margin="normal" error={!!formErrors[name]}>
        <Typography>{label}</Typography>
        <Slider
          name={name}
          value={parseFloat(value) || min}
          min={min}
          valueLabelDisplay="auto"
          max={max}
          step={step}
          onChange={(e, newValue) =>
            handleChange({ target: { name, value: newValue } })
          }
        />
        {renderError()}
      </FormControl>
    );
  }

  return null;
};
