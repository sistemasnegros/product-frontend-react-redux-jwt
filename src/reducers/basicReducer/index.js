// Recucer Generic for views
import { CLEAR, ADD, DELETE, UPDATE, SEARCH } from '../../const/actionsTypes';

const initialState = [];

const dataState = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const stateNew = state.concat(action.data);
      stateNew.sort(function (a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      return stateNew;
    }
    case UPDATE: {
      const stateNew = state.map((element) =>
        element.id === action.data.id ? action.data : element,
      );
      return stateNew;
    }
    case DELETE: {
      const stateNew = state.filter((element) => ~~element.id !== ~~action.id);
      return stateNew;
    }
    case SEARCH: {
      return action.data;
    }
    case CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
};

export default dataState;
