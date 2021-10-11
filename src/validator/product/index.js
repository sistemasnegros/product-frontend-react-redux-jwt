import { isEmpty } from '../../utils/index';
import { isRequired, isNumber } from '../generic';

const validateInput = (data) => {
  let errors = {};

  isRequired('name', data, errors);
  isRequired('price', data, errors);
  isNumber('price', data, errors);
  isRequired('image', data, errors);

  const isValid = isEmpty(errors);
  return {
    errors,
    isValid,
  };
};

export default validateInput;
