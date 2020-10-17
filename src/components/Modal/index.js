import {
  Dialog,
  DialogContent,
  DialogTitle,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import styles from './styles';

class Modal extends Component {
  render() {
    const { classes, modal, modalActionCreators } = this.props;
    const { open, title, component } = modal;
    const { hideModal } = modalActionCreators;

    return (
      <Dialog
        open={open}
        onClose={hideModal}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          {component}
        </DialogContent>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

Modal.propTypes = {
  classes: PropTypes.object,
  modal: PropTypes.shape({
    open: PropTypes.bool,
    component: PropTypes.object,
    title: PropTypes.string,
  }),
  modalActionCreators: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(Modal);
