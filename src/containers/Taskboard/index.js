/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Button, Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import { STATUSES } from '../../contants';
import AddIcon from '@material-ui/icons/Add';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox';

class Taskboard extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest, fetchListTask } = taskActionCreators;
    // fetchListTaskRequest();
    fetchListTask();
  }

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
    const { classes, filterTask } = this.props;

    return (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => (
          <Grid item md={4} xs={12} key={index}>
            <div className={classes.status}>{status.label}</div>
            <div className={classes.wrapperListTask}>
              <TaskList tasks={filterTask} status={status} key={index} />
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }

  renderForm() {
    return <TaskForm open={this.state.open} onCloseForm={this.handleClose} />;
  }

  handleFilter = (e) => {
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(e.target.value);
  };

  renderSearchBox() {
    return <SearchBox handleChange={this.handleFilter} />;
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
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
  filterTask: PropTypes.array,
};

const mapStateToProps = (state) => ({
  listTask: state.task.listTask,
  filterTask: state.task.filterTask,
});

const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
