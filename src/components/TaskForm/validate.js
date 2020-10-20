const validate = (values) => {
  const errors = {};

  // Check required
  const requiredFields = ['title', 'status', 'description'];

  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  // Check length
  const minLength = (field, min) => {
    if (values[field]) {
      const trimField = values[field].trim();
      if (trimField.length < min) {
        errors[field] = `Must be at least ${min} characters`;
      }
    }
  };

  const maxLength = (field, max) => {
    if (values[field]) {
      const trimField = values[field].trim();
      if (trimField.length > max) {
        errors[field] = `Must be ${max} characters or less`;
      }
    }
  };

  // Validate title
  minLength('title', 5);
  maxLength('title', 100);

  // Validate description
  minLength('description', 100);
  maxLength('description', 500);

  return errors;
};

export default validate;
