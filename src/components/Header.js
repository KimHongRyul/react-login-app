import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Link to="/" className="nav-link" className="navbar-brand">
          LoginApp
        </Link>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/user" className="nav-link">
            User
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
