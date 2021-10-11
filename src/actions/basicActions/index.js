import axios from 'axios';
import {
  ADD,
  DELETE,
  UPDATE,
  SEARCH,
  CLEAR,
  GET_BY_ID,
} from '../../const/actionsTypes';

const addElementsAction = (url, state) => {
  return (dispatch) => {
    return axios.post(url, state).then((response) => {
      dispatch({
        type: ADD,
        data: response.data,
      });
      return response;
    });
  };
};

const deleteElementsAction = (url, id) => {
  return (dispatch) => {
    return axios.delete(`${url}/${id}`).then((response) => {
      dispatch({
        type: DELETE,
        id,
      });
      return response;
    });
  };
};

const updateElementsAction = (url, id, state) => {
  return (dispatch) => {
    return axios.put(`${url}/${id}`, state).then((response) => {
      dispatch({
        type: UPDATE,
        data: response.data,
      });
      return response;
    });
  };
};

const searchElementsAction = (url, state) => {
  return (dispatch) => {
    return axios.get(url, state).then((response) => {
      dispatch({
        type: SEARCH,
        data: response.data,
      });
    });
  };
};

const getByIdElementsAction = (url, id) => {
  return (dispatch) => {
    return axios.get(`${url}/${id}`).then((response) => {
      dispatch({
        type: GET_BY_ID,
        data: response.data,
      });
      return response;
    });
  };
};

const clearElementsAction = () => {
  return {
    type: CLEAR,
  };
};

export {
  addElementsAction,
  deleteElementsAction,
  updateElementsAction,
  searchElementsAction,
  clearElementsAction,
  getByIdElementsAction,
};
