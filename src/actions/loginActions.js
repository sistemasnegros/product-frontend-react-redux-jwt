import axios from 'axios';

import URL from '../const/url';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from '../const/actionsTypes';
import jwt from 'jsonwebtoken';

const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
};

const loginRequest = (userData) => {
  return (dispatch) => {
    return axios.post(URL.LOGIN_API, userData).then((response) => {
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  };
};

export { loginRequest, setCurrentUser, logout };
