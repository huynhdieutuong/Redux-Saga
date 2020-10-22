import * as taskApis from '../apis/task';
import * as taskConstants from '../contants/task';

export const fetchListTask = (params = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      params,
    },
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

/**
 * Step1: fetchListTaskRequest()
 * Step2: Reset state tasks => fetchListTask()
 * Step3: fetchListTaskSuccess()
 *        fetchListTaskFailed()
 */
// export const fetchListTaskRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then((res) => {
//         dispatch(fetchListTaskSuccess(res.data));
//       })
//       .catch((error) => {
//         dispatch(fetchListTaskFailed(error));
//       });
//   };
// };

export const filterTask = (keyword) => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};

export const filterTaskSuccess = (data) => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const filterTaskFailed = (error) => {
  return {
    type: taskConstants.FILTER_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const addTask = (newTask) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      newTask,
    },
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskFailed = (error) => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const setTaskEditing = (task) => {
  return {
    type: taskConstants.SET_TASK_EDITING,
    payload: {
      task,
    },
  };
};
