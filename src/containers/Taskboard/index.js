import React, { Component } from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import { STATUSES } from '../../contants';
import AddIcon from '@material-ui/icons/Add';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const taskList = [
  {
    id: 0,
    title: 'Read book',
    description: 'Read material UI book',
    status: 0,
  },
  {
    id: 1,
    title: 'Play game',
    description: 'Play pokemon game',
    status: 1,
  },
  {
    id: 2,
    title: 'Sleep',
    description: 'Sleep 2 hours',
    status: 2,
  },
  {
    id: 3,
    title: 'Eat',
    description: 'Eat breakfast',
    status: 2,
  },
];

class Taskboard extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderBoard() {
    const { classes } = this.props;

    return (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => (
          <Grid item md={4} xs={12} key={index}>
            <div className={classes.status}>{status.label}</div>
            <div className={classes.wrapperListTask}>
              <TaskList tasks={taskList} status={status} key={index} />
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }

  renderForm() {
    return <TaskForm open={this.state.open} onCloseForm={this.handleClose} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.taskBoard}>
        <Button
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          onClick={this.handleClickOpen}
        >
          Add task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
