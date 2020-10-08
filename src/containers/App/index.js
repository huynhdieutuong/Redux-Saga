import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className='App'>
        <h1 className={classes.demo}>Hello</h1>
      </div>
    );
  }
}

export default withStyles(styles)(App);
