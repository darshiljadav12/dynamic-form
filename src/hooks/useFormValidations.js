export const useFormValidations = () => {
  const validateField = (field, value) => {
    const { required, min, max, label, type } = field;
    let error = '';

    if (required && !value) {
      error = `${label} is required`;
    }

    if (type === 'number' || type === 'slider') {
      if (min !== undefined && value < min) {
        error = `${label} should be at least ${min}`;
      }
      if (max !== undefined && value > max) {
        error = `${label} should be at most ${max}`;
      }
    }

    return error;
  };

  const validateForm = (form, formData, setFormErrors) => {
    let errors = {};

    form.groups.forEach((group) => {
      group.fields.forEach((field) => {
        const value = formData[field.name];
        const error = validateField(field, value);

        if (error) {
          errors[field.name] = error;
        }
      });
    });

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return {
    validateField,
    validateForm,
  };
};
