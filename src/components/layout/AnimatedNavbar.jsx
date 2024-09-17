import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 // If you're using React Router

function AnimatedNavbar() {
  return (

    
    <Navbar   variant='light' expand="lg" className="animate__animated animate__fadeIn">
      <Navbar.Brand as={Link} to="/" className="animate__animated animate__bounceIn">
        Deepesh Giri
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className=" ">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className=" ">About</Nav.Link>
          <Nav.Link as={Link} to="/projects" className=" ">Projects</Nav.Link>
          <Nav.Link as={Link} to="/contact" className=" ">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AnimatedNavbar;
