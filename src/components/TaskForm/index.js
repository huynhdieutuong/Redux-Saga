import { Button, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import { STATUSES } from '../../contants/index';
import renderTextField from '../FormHelper/TextField';
import renderSelectField from '../FormHelper/SelectField';
import styles from './styles';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    console.log({ data });
    this.props.modalActionCreators.hideModal();
  };

  required = (value) => {
    let error = 'Required';
    if (value && value.trim() !== '') {
      error = null;
    }
    return error;
  };

  maxLength = (value) => {
    let error = null;
    if (value && value.length > 100) {
      error = 'Max length 100 characters';
    }
    return error;
  };

  minLength = (value) => {
    let error = null;
    if (value && value.length < 5) {
      error = 'Min length 5 characters';
    }
    return error;
  };

  render() {
    const { classes, modalActionCreators, handleSubmit } = this.props;
    const { hideModal } = modalActionCreators;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Field
          autoFocus
          margin='dense'
          id='title'
          label='Title'
          type='text'
          name='title'
          fullWidth
          className={classes.textField}
          component={renderTextField}
          validate={[this.required, this.minLength, this.maxLength]}
        />
        <Field
          id='standard-select-currency'
          select
          label='Status'
          name='status'
          fullWidth
          className={classes.textField}
          component={renderSelectField}
        >
          {STATUSES.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </Field>
        <Field
          id='standard-multiline-static'
          label='Description'
          name='description'
          multiline
          rows={4}
          fullWidth
          className={classes.textField}
          component={renderTextField}
        />
        <Grid container justify='flex-end'>
          <Button onClick={hideModal} color='secondary'>
            Cancel
          </Button>
          <Button color='primary' type='submit'>
            Add
          </Button>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: 'TASK_MANAGEMENT',
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
