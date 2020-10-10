import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import styles from './styles';
import { STATUSES } from '../../contants';
import AddIcon from '@material-ui/icons/Add';

const taskList = [
  {
    id: 0,
    title: 'Read book',
    description: '',
    status: 0,
  },
  {
    id: 1,
    title: 'Play game',
    description: '',
    status: 1,
  },
  {
    id: 2,
    title: 'Sleep',
    description: '',
    status: 2,
  },
  {
    id: 3,
    title: 'Eat',
    description: '',
    status: 2,
  },
];
class Taskboard extends Component {
  renderBoard() {
    const { classes } = this.props;

    return (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => (
          <Grid item md={4} xs={12} key={index}>
            <div className={classes.status}>{status.label}</div>
            <div className={classes.wrapperListTask}>
              {taskList
                .filter((task) => task.status === status.value)
                .map((task) => (
                  <Card key={task.id} className={classes.card}>
                    <CardContent>
                      <Grid container justify='space-between'>
                        <Grid item md={8}>
                          <Typography component='h2'>{task.title}</Typography>
                        </Grid>
                        <Grid item md={4}>
                          {status.label}
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button size='small'>Edit</Button>
                    </CardActions>
                  </Card>
                ))}
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.taskBoard}>
        <Button variant='contained' color='primary' startIcon={<AddIcon />}>
          Add task
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
