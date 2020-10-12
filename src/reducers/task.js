import * as taskConstants from '../contants/task';

const initialState = {
  listTask: [],
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
      return {
        ...state,
        listTask: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
