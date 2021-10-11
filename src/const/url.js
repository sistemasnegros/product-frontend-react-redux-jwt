const URL_API = 'http://localhost:3001';
const URL_ROOT = `${URL_API}/api/v1`;

const URL = {
  PRODUCT_API: `${URL_ROOT}/products`,
  USER_API: `${URL_ROOT}/users`,
  LOGIN_API: `${URL_ROOT}/users/login`,

  LOGIN: `/login`,
  SIGN_IN: `/sign-in`,
  PRODUCT: `/products`,
  PRODUCT_FORM: `/products-form`,
  PRODUCT_FORM_ID: `/products-form/:id`,
  HOME: `/`,
};

export default URL;
