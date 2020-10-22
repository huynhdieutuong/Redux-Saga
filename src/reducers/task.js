import { toastError } from '../commons/helpers/toast';
import * as taskConstants from '../contants/task';

const initialState = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      return {
        ...state,
        listTask: payload.data,
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      toastError(payload.error);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      return {
        ...state,
        listTask: payload.data,
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
      };
    }
    case taskConstants.ADD_TASK_FAILED: {
      toastError(payload.error);
      return {
        ...state,
      };
    }
    case taskConstants.SET_TASK_EDITING: {
      return {
        ...state,
        taskEditing: payload.task,
      };
    }
    default:
      return state;
  }
};

export default reducer;
