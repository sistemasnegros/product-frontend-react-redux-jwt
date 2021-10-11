import { ADD_FLASH_MESSAGE, DEL_FLASH_MESSAGE } from '../const/actionsTypes';
import shortid from 'shortid';

const FlashMessageReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text,
        },
      ];
    case DEL_FLASH_MESSAGE:
      return state.filter((meessages) => meessages.id !== action.id);
    default:
      return state;
  }
};

export default FlashMessageReducer;
