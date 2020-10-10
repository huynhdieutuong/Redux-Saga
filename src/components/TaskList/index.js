import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends Component {
  render() {
    const { tasks, status } = this.props;

    return (
      <div>
        {tasks
          .filter((task) => task.status === status.value)
          .map((task) => (
            <TaskItem task={task} key={task.id} status={status} />
          ))}
      </div>
    );
  }
}

export default withStyles(styles)(TaskList);
