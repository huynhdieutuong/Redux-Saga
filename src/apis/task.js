import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../contants';

const url = 'tasks';

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addTask = (data) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
