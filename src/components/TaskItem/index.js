import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  render() {
    const { classes, task, status, onClickEdit } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid container justify='space-between'>
            <Grid item md={8}>
              <Typography variant='h5' component='h2'>
                {task.title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <Typography variant='body2' className={classes.description}>
            {task.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            size='small'
            color='primary'
            aria-label='edit'
            className={classes.margin}
            onClick={() => onClickEdit(task)}
          >
            <EditIcon />
          </Fab>
          <Fab
            size='small'
            color='secondary'
            aria-label='delete'
            className={classes.margin}
          >
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
