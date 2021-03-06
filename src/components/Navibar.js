import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import LoginForm from "../profile/Login";
import { Dropdown } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../utils/Auth";

const Navibar = () => {
  const [redirect, setRedirect] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    AuthService.isAuthenticated()
  );

  function logout() {
    localStorage.removeItem("auth_token");
    setAuthenticated(false);
    setRedirect(true);
  }

  return (
    <Navbar bg="primary" expand="lg">
      {redirect ? <Redirect to="/register/" /> : null}
      {!authenticated ? (
        <LoginForm handleAuth={setAuthenticated} />
      ) : (
        <React.Fragment>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/editProfile">
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <b>Hello! {AuthService.getProfile().username}</b>
        </React.Fragment>
      )}
    </Navbar>
  );
};

export default Navibar;
