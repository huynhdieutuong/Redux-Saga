import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class Taskboard extends Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.demo}>Taskboard</div>;
  }
}

export default withStyles(styles)(Taskboard);
