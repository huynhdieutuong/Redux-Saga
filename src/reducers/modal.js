import * as modalTypes from '../contants/modal';

const initialState = {
  open: false,
  title: '',
  component: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case modalTypes.SHOW_MODAL:
      return {
        ...state,
        open: true,
      };
    case modalTypes.HIDE_MODAL:
      return {
        ...state,
        open: false,
      };
    case modalTypes.CHANGE_MODAL_TITLE:
      return {
        ...state,
        title: payload.title,
      };
    case modalTypes.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        component: payload.component,
      };
    default:
      return state;
  }
};

export default reducer;
