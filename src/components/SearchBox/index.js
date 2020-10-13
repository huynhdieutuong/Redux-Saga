import React, { Component } from 'react';
import { TextField, withStyles } from '@material-ui/core';
import styles from './styles';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;

    return (
      <form className={classes.root} noValidate autoComplete='off'>
        <div>
          <TextField
            id='standard-search'
            label='Search field'
            type='search'
            onChange={handleChange}
          />
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
