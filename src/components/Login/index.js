import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import URL from '../../const/url';
import InputForm from '../Generic/InputForm';

import { loginRequest } from '../../actions/loginActions';
import { addFlashMessage } from '../../actions/flashMessages';

import validForm from '../../validator/user/loginFormValidator';

const LoginForm = (props) => {
  const validFields = {};
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const { errors: err, isValid } = validForm(formData);

    if (isValid) {
      props.loginRequest(formData).then(
        (res) => {
          props.addFlashMessage({
            type: 'success',
            text: 'Welcome.',
          });
          props.history.push(URL.PRODUCT);
        },
        (res) => {
          console.log(res.response.data);
          props.addFlashMessage({
            type: 'error',
            text: 'Auth Failed.',
          });
        },
      );
    } else {
      setErrors(err);
    }
  };

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      {errors.form && <div className="alert alert-danger">{errors.form}</div>}
      <h1>Login</h1>

      <InputForm
        label="Username"
        field="username"
        onChange={onChange}
        value={formData.username}
        errors={errors}
        validFields={validFields}
      />
      <InputForm
        type="password"
        label="Password"
        field="password"
        onChange={onChange}
        value={formData.password}
        errors={errors}
      />

      <div className="form-group centro">
        <button
          disabled={loading || invalid}
          className="btn btn-primary btn-default"
        >
          Entrar
        </button>
      </div>
    </Form>
  );
};

export default connect(null, { loginRequest, addFlashMessage })(LoginForm);
