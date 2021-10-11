import { Navbar, Container, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import URL from '../../../const/url';
import { logout } from '../../../actions/loginActions';

import { withRouter } from 'react-router-dom';

const NavBar = (props) => {
  const { history, isAuthenticated, user } = props;

  const logoutHander = (e) => {
    e.preventDefault();
    props.logout();
    history.push(URL.HOME);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={URL.HOME}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1000/1000946.png"
            alt=""
            height="24"
          />
          {user.username || ''}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={URL.HOME}>Home</Nav.Link>

            {isAuthenticated && (
              <>
                <Nav.Link href={URL.PRODUCT}>Products</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link onClick={logoutHander}>
                  Logout <i className="bi bi-door-open" />
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href={URL.LOGIN}>
                  Login <i className="bi bi-box-arrow-in-right" />
                </Nav.Link>
                <Nav.Link href={URL.SIGN_IN}>
                  SingIn <i className="bi bi-person-plus" />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    user: state.loginReducer.user,
  };
};

export default withRouter(connect(mapStateToProps, { logout })(NavBar));
