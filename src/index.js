import ReactDOM from 'react-dom';
import './css/index.css';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';

import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser, logout } from './actions/loginActions';

import store from './store';
import AppRoutes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
} else {
  store.dispatch(logout());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
