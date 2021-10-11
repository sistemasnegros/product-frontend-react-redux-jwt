import validator from 'validator';

import { REQUIRED_FIELD } from '../../const/errorsField';
import { INVALID_MATCH_FIELD } from '../../const/errorsField';
import { REQUIRED_NUMBER_FIELD } from '../../const/errorsField';

function isRequired(field, data, errors, label = field) {
  if (validator.isEmpty(`${data[field]}`)) {
    errors[label] = REQUIRED_FIELD;
  }
  return errors;
}

function isEquals(
  field1,
  field2,
  data,
  errors,
  labelError = INVALID_MATCH_FIELD,
  label = field2,
) {
  if (!validator.equals(data[field1], data[field2])) {
    errors[label] = labelError;
  }
  return errors;
}

function isNumber(
  field,
  data,
  errors,
  labelError = REQUIRED_NUMBER_FIELD,
  label = field,
) {
  const dataField = data[field];
  if (dataField !== '' && !parseInt(dataField)) {
    errors[label] = labelError;
  }
  return errors;
}

export { isRequired, isEquals, isNumber };
