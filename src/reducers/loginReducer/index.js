import { SET_CURRENT_USER } from '../../const/actionsTypes';
import { isEmpty } from '../../utils/index';

const initialState = {
  isAuthenticated: false,
  user: {},
};
const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    default:
      return state;
  }
};

export default loginReducer;
