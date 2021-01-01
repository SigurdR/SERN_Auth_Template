import { Link } from 'react-router-dom';

import {
  Nav,
  Navbar as BSNavbar
} from 'react-bootstrap';

import { useStoreContext } from '../utils/GlobalState';


const LoggedIn = () => {
  return (
    <>
      <Link to="/" className="nav-link">
        <i className="fas fa-sign-out-alt"></i> Logout
      </Link>
    </>
  )
}


const LoggedOut = () => {
  return (
    <>
      <Link to="/login" className="nav-link">
        <i className="fas fa-sign-in-alt"></i> Login
      </Link>
      <Link to="/register" className="nav-link">
        <i className="fas fa-user-plus"></i> Register
      </Link>
    </>
  )
}


const Navbar = () => {
  const [state] = useStoreContext();

  return (
    <BSNavbar bg="light" expand="lg" className="mb-4">

      <BSNavbar.Brand href="/">Home</BSNavbar.Brand>

      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
          {state.user.auth
            ? (
              <LoggedIn />
            ) : (
              <LoggedOut />
            )}

        </Nav>

      </BSNavbar.Collapse>
    </BSNavbar>
  )
}

export default Navbar;
