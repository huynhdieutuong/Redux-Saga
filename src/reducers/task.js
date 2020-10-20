import { toastError } from '../commons/helpers/toast';
import * as taskConstants from '../contants/task';

const initialState = {
  listTask: [],
  filterTask: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
        filterTask: [],
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      return {
        ...state,
        listTask: payload.data,
        filterTask: payload.data,
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      toastError(payload.error);
      return {
        ...state,
        listTask: [],
        filterTask: [],
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      return {
        ...state,
        filterTask: payload.data,
      };
    }
    case taskConstants.ADD_TASK: {
      return {
        ...state,
      };
    }
    case taskConstants.ADD_TASK_SUCCESS: {
      return {
        ...state,
        listTask: state.listTask.concat([payload.data]),
        filterTask: state.listTask.concat([payload.data]),
      };
    }
    case taskConstants.ADD_TASK_FAILED: {
      toastError(payload.error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
