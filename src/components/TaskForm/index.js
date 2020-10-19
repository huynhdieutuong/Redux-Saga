import {
  Button,
  Grid,
  MenuItem,
  TextField,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import { STATUSES } from '../../contants/index';
import styles from './styles';
import { reduxForm, Field } from 'redux-form';

class TaskForm extends Component {
  state = {
    status: 0,
  };

  handleChangeStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  handleSubmitForm = (data) => {
    console.log({ data });
    this.props.modalActionCreators.hideModal();
  };

  render() {
    const { classes, modalActionCreators, handleSubmit } = this.props;
    const { hideModal } = modalActionCreators;
    const { status } = this.state;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Field name='title1' component='input' />
        <TextField
          autoFocus
          margin='dense'
          id='title'
          label='Title'
          type='title'
          fullWidth
          className={classes.textField}
        />
        <TextField
          id='standard-select-currency'
          select
          label='Status'
          value={status}
          onChange={this.handleChangeStatus}
          fullWidth
          className={classes.textField}
        >
          {STATUSES.map((status) => (
            <MenuItem key={status.value} value={status.value}>
              {status.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='standard-multiline-static'
          label='Description'
          multiline
          rows={4}
          fullWidth
          className={classes.textField}
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
