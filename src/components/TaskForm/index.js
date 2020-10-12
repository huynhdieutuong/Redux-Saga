import React, { Component } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  withStyles,
} from '@material-ui/core';
import styles from './styles';
import { STATUSES } from '../../contants/index';
import PropTypes from 'prop-types';

class TaskForm extends Component {
  state = {
    status: 0,
  };

  handleChangeStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  render() {
    const { classes, open, onCloseForm } = this.props;
    const { status } = this.state;

    return (
      <Dialog
        open={open}
        onClose={onCloseForm}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add new task</DialogTitle>
        <DialogContent className={classes.dialogContent}>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseForm} color='primary'>
            Cancel
          </Button>
          <Button onClick={onCloseForm} color='primary'>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onCloseForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(TaskForm);
