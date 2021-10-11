import PropTypes from 'prop-types';
import classnames from 'classnames';

const FlashTypes = ({ id, type, text, deleteFlashMessage }) => {
  return (
    <div
      className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error',
      })}
    >
      <button className="close btn-sm" onClick={() => deleteFlashMessage(id)}>
        <span>&times;</span>
      </button>
      {text}
    </div>
  );
};

FlashTypes.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  deleteFlashMessage: PropTypes.func,
};

export default FlashTypes;
