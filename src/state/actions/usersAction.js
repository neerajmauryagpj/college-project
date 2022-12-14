import service from '../services'
import {
  RESPONSE_NOTIFICATION,
  GET_USERS,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "./types";
export const notification = (data) => {
  return (dispatch) => {
    console.log(404);
    dispatch({
      type: RESPONSE_NOTIFICATION,
      payload:data,
    });
  }
}

export const createUser = (data) => async (dispatch) => {
  try {
    const response = await service.createUser(data);
    dispatch({
      type: CREATE_USER,
      payload: response.data,
    });
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const getUsers = () => async (dispatch) => {
  try {
    const response = await service.getUsers();
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
    notification();
    console.log(response);
  } catch (err) {
    notification()
    console.log(err);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await service.deleteUser(id);
    dispatch({
      type: DELETE_USER,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateUser = (id, data) => async (dispatch) => {
  try {
    const response = await service.update(id, data);
    dispatch({
      type: UPDATE_USER,
      payload: data,
    });
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};