import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import LoadingIcon from '../../assets/images/loading.gif';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;

    return (
      <Fragment>
        {showLoading && (
          <div className={classes.globalLoading}>
            <img src={LoadingIcon} alt='loading' className={classes.icon} />
          </div>
        )}
      </Fragment>
    );
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  showLoading: state.ui.showLoading,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
