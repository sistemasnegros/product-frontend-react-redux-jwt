import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputForm = ({
  field,
  value,
  label,
  type = 'text',
  onChange,
  errors = {},
  onBlur,
  validFields = {},
  placeholder = '',
  checked = '',
  onClick,
  onKeyPress,
  disabled = false,
}) => {
  return (
    <div
      className={classnames(
        'mb-3',
        { 'has-error': errors[field] },
        { 'has-success': validFields[field] },
      )}
    >
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={field}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        checked={checked}
        onClick={onClick}
        onKeyPress={onKeyPress}
        disabled={disabled}
        className={classnames(
          'form-control',
          { 'is-invalid': errors[field] },
          { 'is-valid': validFields[field] },
        )}
      />
      {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
    </div>
  );
};

InputForm.propType = {
  field: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.array,
  validFields: PropTypes.array,
};

export default InputForm;
