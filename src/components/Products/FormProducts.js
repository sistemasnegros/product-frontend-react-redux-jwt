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

import validForm from '../../validator/product';

const FormProducts = (props) => {
  const {
    addElementsAction,
    addFlashMessage,
    updateElementsAction,
    getByIdElementsAction,
    history,
    match,
  } = props;
  const productId = match.params && match.params.id;

  const validFields = {};
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    detail: '',
    img: '',
  });

  const callbackAction = (ProducId) => {
    return [
      (res) => {
        addFlashMessage({
          type: 'success',
          text: `Product ${ProducId ? 'Updated' : 'Created'}.`,
        });
        history.push(URL.PRODUCT);
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

  const callbacks = callbackAction(productId);

  const create = () => {
    addElementsAction(URL.PRODUCT_API, formData).then(...callbacks);
  };

  const update = () => {
    updateElementsAction(URL.PRODUCT_API, productId, formData).then(
      ...callbacks,
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { errors: err, isValid } = validForm(formData);

    if (!isValid) {
      setErrors(err);
      return;
    }

    if (productId) {
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
    if (productId) {
      getByIdElementsAction(URL.PRODUCT_API, productId).then((res) => {
        console.log(res);
        setFormData(res.data);
      });
    }
  }, []);

  return (
    <Container>
      <h1>{productId ? 'Update' : 'Create'} Product</h1>
      <Row>
        <Col className="col-md-12">
          <Form onSubmit={onSubmit}>
            {errors.form && (
              <div className="alert alert-danger">{errors.form}</div>
            )}

            <InputForm
              label="Name"
              field="name"
              onChange={onChange}
              value={formData.name}
              errors={errors}
              validFields={validFields}
            />
            <InputForm
              label="Price"
              field="price"
              onChange={onChange}
              value={formData.price}
              errors={errors}
            />
            <InputForm
              label="Detail"
              field="detail"
              onChange={onChange}
              value={formData.detail}
              errors={errors}
            />

            <InputForm
              label="Image Link"
              field="image"
              onChange={onChange}
              value={formData.image}
              errors={errors}
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
})(FormProducts);
