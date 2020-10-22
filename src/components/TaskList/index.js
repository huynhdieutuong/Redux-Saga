import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';
import PropTypes from 'prop-types';

class TaskList extends Component {
  render() {
    const { tasks, status, onClickEdit } = this.props;

    return (
      <div>
        {tasks
          .filter((task) => task.status === status.value)
          .map((task) => (
            <TaskItem
              task={task}
              key={task.id}
              status={status}
              onClickEdit={onClickEdit}
            />
          ))}
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
};

export default withStyles(styles)(TaskList);
