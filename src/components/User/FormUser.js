import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Container, Row, Col } from 'react-bootstrap';

import {
  addElementsAction,
  updateElementsAction,
  getByIdElementsAction,
} from '../../actions/basicActions';
import { addFlashMessage } from '../../actions/flashMessages';
import URL from '../../const/url';
import InputForm from '../Generic/InputForm';
import validForm from '../../validator/user/singupFormValidator';

const FormUser = (props) => {
  const {
    addElementsAction,
    addFlashMessage,
    updateElementsAction,
    getByIdElementsAction,
    history,
    match,
  } = props;
  const userId = match.params && match.params.id;

  const validFields = {};
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState('');

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    passwordConfirm: '',
  });

  const callbackAction = (userId) => {
    return [
      (res) => {
        addFlashMessage({
          type: 'success',
          text: `User ${userId ? 'Updated' : 'Register'}.`,
        });
        history.push(URL.LOGIN);
      },
      (res) => {
        console.log(res.response.data);
        addFlashMessage({
          type: 'error',
          text: 'Form Error.',
        });
      },
    ];
  };

  const callbacks = callbackAction(userId);

  const create = () => {
    addElementsAction(URL.USER_API, formData).then(...callbacks);
  };

  const update = () => {
    updateElementsAction(URL.PRODUCT_API, userId, formData).then(...callbacks);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { errors: err, isValid } = validForm(formData);

    if (!isValid) {
      setErrors(err);
      return;
    }

    if (userId) {
      update();
    } else {
      create();
    }
  };

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (userId) {
      getByIdElementsAction(URL.PRODUCT_API, userId).then((res) => {
        console.log(res);
        setFormData(res.data);
      });
    }
  }, []);

  return (
    <Container>
      <h1>{userId ? 'Update' : 'Register'} User</h1>
      <Row>
        <Col className="col-md-12">
          <Form onSubmit={onSubmit}>
            {errors.form && (
              <div className="alert alert-danger">{errors.form}</div>
            )}

            <InputForm
              label="Username"
              field="username"
              onChange={onChange}
              value={formData.username}
              errors={errors}
              validFields={validFields}
            />
            <InputForm
              label="Firstname"
              field="firstname"
              onChange={onChange}
              value={formData.firstname}
              errors={errors}
            />
            <InputForm
              label="Lastname"
              field="lastname"
              onChange={onChange}
              value={formData.lastname}
              errors={errors}
            />

            <InputForm
              label="Password"
              field="password"
              onChange={onChange}
              value={formData.password}
              errors={errors}
              type="password"
            />

            <InputForm
              label="Confim Password"
              field="passwordConfirm"
              onChange={onChange}
              value={formData.passwordConfirm}
              errors={errors}
              type="password"
            />

            <div className="form-group centro">
              <button
                disabled={loading || invalid}
                className="btn btn-primary btn-default"
              >
                Save
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, {
  addElementsAction,
  updateElementsAction,
  getByIdElementsAction,
  addFlashMessage,
})(FormUser);
