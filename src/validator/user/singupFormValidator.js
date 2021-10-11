import { isEmpty } from '../../utils/index';
import { isRequired, isEquals } from '../generic';

const validateInput = (data) => {
  let errors = {};

  isRequired('username', data, errors);
  isRequired('firstname', data, errors);
  isRequired('lastname', data, errors);
  isRequired('password', data, errors);
  isRequired('passwordConfirm', data, errors);

  isEquals('password', 'passwordConfirm', data, errors);

  const isValid = isEmpty(errors);
  return {
    errors,
    isValid,
  };
};

export default validateInput;
