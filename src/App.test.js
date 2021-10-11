import { render, screen } from '@testing-library/react';
import store from './store';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

test('renders Home Full-Stack', () => {
  render(
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/Full-Stack/i);
  expect(linkElement).toBeInTheDocument();
});
