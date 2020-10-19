import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor='color-native-simple'>{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple',
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderSelectField;
