import { Button, Grid, MenuItem, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import { STATUSES } from '../../contants/index';
import renderSelectField from '../FormHelper/SelectField';
import renderTextField from '../FormHelper/TextField';
import styles from './styles';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    data.status = parseInt(data.status);
    if (this.props.task.taskEditing) {
      this.props.taskActionCreators.updateTask(data);
    } else {
      this.props.taskActionCreators.addTask(data);
    }
  };

  render() {
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
      task: { taskEditing },
    } = this.props;
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
          <MenuItem value=''>Select status</MenuItem>
          {STATUSES.map((status) => (
            <MenuItem key={status.value} value={status.value}>
              {status.label}
            </MenuItem>
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
          <Button
            color='primary'
            type='submit'
            disabled={invalid || submitting}
          >
            {taskEditing ? 'Update' : 'Add'}
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
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  initialValues: PropTypes.object,
  task: PropTypes.shape({
    taskEditing: PropTypes.object,
  }),
};

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
  taskActionCreators: bindActionCreators(taskActions, dispatch),
});

const mapStateToProps = (state) => ({
  initialValues: state.task.taskEditing,
  task: state.task,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: 'TASK_MANAGEMENT',
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(TaskForm);
