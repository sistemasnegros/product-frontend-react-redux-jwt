import { ADD_FLASH_MESSAGE } from '../const/actionsTypes';
import { DEL_FLASH_MESSAGE } from '../const/actionsTypes';

function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message: message,
  };
}

function delFlashMessage(id) {
  return {
    type: DEL_FLASH_MESSAGE,
    id: id,
  };
}

export { addFlashMessage, delFlashMessage };
