import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashTypes from './FlashTypes';
import { delFlashMessage } from '../../../actions/flashMessages';

const FlashMessages = (props) => {
  const onClick = (id) => {
    props.delFlashMessage(id);
  };

  const { messages } = props;

  return (
    <div className="flashMessages">
      {messages.map((message) => (
        <FlashTypes
          key={message.id}
          id={message.id}
          type={message.type}
          text={message.text}
          deleteFlashMessage={onClick}
        />
      ))}
    </div>
  );
};

FlashMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  delFlashMessage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    messages: state.flashMessages,
  };
}

export default connect(mapStateToProps, { delFlashMessage })(FlashMessages);
