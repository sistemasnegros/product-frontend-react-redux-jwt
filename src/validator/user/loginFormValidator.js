import { isEmpty } from '../../utils/index';
import { isRequired } from '../generic';

const validateInput = (data) => {
  let errors = {};

  isRequired('username', data, errors);
  isRequired('password', data, errors);

  const isValid = isEmpty(errors);
  return {
    errors,
    isValid,
  };
};

export default validateInput;
