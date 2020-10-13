import React, { Component } from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core';
import styles from './styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';
import { Provider } from 'react-redux';
import configureStore from '../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalLoading />
          <ToastContainer />
          <Taskboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
