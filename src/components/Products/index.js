import { connect } from 'react-redux';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import { addFlashMessage } from '../../actions/flashMessages';
import {
  searchElementsAction,
  deleteElementsAction,
} from '../../actions/basicActions';
import { useEffect } from 'react';
import URL from '../../const/url';

const Products = (props) => {
  const {
    searchElementsAction,
    deleteElementsAction,
    products,
    addFlashMessage,
  } = props;

  useEffect(async () => {
    await searchElementsAction(URL.PRODUCT_API, {});
  }, []);

  //   const editProduct = (id) => {};

  const deleteProduct = (id) => {
    deleteElementsAction(URL.PRODUCT_API, id).then(
      () => {
        addFlashMessage({
          type: 'success',
          text: 'Product deleted.',
        });
      },
      (res) => {
        console.log(res.response.data);
        addFlashMessage({
          type: 'error',
          text: 'Failed to delete the product.',
        });
      },
    );
  };

  return (
    <div className="products">
      <img
        id="imgProduct"
        src="/products.png"
        className="img-thumbnail"
        alt="..."
      ></img>
      <h1>Products</h1>
      <br></br>
      <Button href={URL.PRODUCT_FORM} className="btn btn-primary">
        Create <i className="bi bi-plus-circle-fill"></i>{' '}
      </Button>
      <br></br>
      <br></br>

      <Container className="cardProduct">
        {products.map((field) => (
          <Row
            key={field.id}
            className="justify-content-md-center cardProductRow"
          >
            <Col md="auto">
              <Card style={{ width: '16rem' }}>
                <Card.Img
                  variant="top"
                  src={field.image}
                  style={{ height: '180px' }}
                />
                <Card.Body>
                  <Card.Title>{field.name}</Card.Title>
                  <Card.Text>
                    <i className="bi bi-currency-dollar">{field.price}</i>
                  </Card.Text>

                  <Button
                    href={`${URL.PRODUCT_FORM}/${field.id}`}
                    variant="primary"
                  >
                    <i className="bi bi-gear"></i>
                  </Button>
                  <Button
                    onClick={() => deleteProduct(field.id)}
                    variant="danger"
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.dataState,
  };
};

export default connect(mapStateToProps, {
  searchElementsAction,
  deleteElementsAction,
  addFlashMessage,
})(Products);
