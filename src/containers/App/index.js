import React, { Component } from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core';
import styles from './styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
