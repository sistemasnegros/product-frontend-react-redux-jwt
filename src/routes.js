import { Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import Page404 from './components/Page404';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import FormProducts from './components/Products/FormProducts';
import FormUser from './components/User/FormUser';
import URL from './const/url';

import { connect } from 'react-redux';

const AppRoutes = ({ isAuthenticated }) => (
  <App>
    <Switch>
      <Route path={URL.HOME} component={Home} exact />
      <Route path={URL.LOGIN} component={Login} exact />
      <Route path={URL.SIGN_IN} component={FormUser} exact />

      <Route
        path={URL.PRODUCT}
        component={requireAuth(Products, isAuthenticated)}
        exact
      />
      <Route
        path={URL.PRODUCT_FORM}
        component={requireAuth(FormProducts, isAuthenticated)}
        exact
      />
      <Route
        path={URL.PRODUCT_FORM_ID}
        component={requireAuth(FormProducts, isAuthenticated)}
        exact
      />

      <Route component={Page404} />
    </Switch>
  </App>
);

const requireAuth = (Component, isAuthenticated) => {
  if (isAuthenticated) {
    return Component;
  } else {
    const redirecLogin = () => <Redirect to={URL.LOGIN} />;
    return redirecLogin;
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.loginReducer.isAuthenticated,
});

export default connect(mapStateToProps, {})(AppRoutes);
