import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Breadcrumb } from 'react-bootstrap';
import passPic from '../../images/pass_pic.jpg'; // Import the image
import './layout.css';



function AnimatedNavbar() {
  const location = useLocation();



  // Split the pathname into an array of segments for breadcrumbs
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="animate__animated animate__fadeIn d-flex justify-content-center">
        <Container fluid>
          {/* Logo Section */}
          <Navbar.Brand as={NavLink} to="/" className="p-0 m-0 d-flex align-items-center">
            <img src={passPic} alt="Logo" width="35" height="35" className="me-auto rounded-circle animate__animated animate__heartBeat animate__infinite infinite" />
            <h3 className="p-0 ms-4  animate__hinge ">Deepesh Giri</h3>
          </Navbar.Brand>

          {/* Hamburger Toggle for mobile */}
          
          
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="small-toggle" />



          {/* Collapsible Section for Links */}
          <Navbar.Collapse id="basic-navbar-nav text-center">
            <Nav className="ms-auto d-flex align-items-end">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link me-3 d-flex align-items-center    ${isActive ? 'active-link ' : ''} ` }
              >
                <i className="bi bi-house me-2"></i> {/* Home icon */}
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => `nav-link me-3 d-flex align-items-center ${isActive ? 'active-link' : ''}`}
              >
                <i className="bi bi-briefcase me-2"></i> {/* Projects icon */}
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link me-3 d-flex align-items-center ${isActive ? 'active-link' : ''}`}
              >
                <i className="bi bi-info-circle me-2"></i> {/* About icon */}
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link me-3 d-flex align-items-center ${isActive ? 'active-link' : ''}`}
              >
                <i className="bi bi-envelope me-2"></i> {/* Contact icon */}
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className="my-0 shadow-sm" />

      <Container fluid>
        {/* Breadcrumb Section */}
        <div className="mt-1">
          <Breadcrumb>
            <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: '/' }} active={pathnames.length === 0}>
              <i className="bi bi-house-door-fill me-1"></i> {/* Home breadcrumb icon */}
              Home
            </Breadcrumb.Item>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              return (
                <Breadcrumb.Item linkAs={NavLink} linkProps={{ to }} key={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
      </Container>
      <hr className="my-0 shadow-sm" />
    </>
  );
}

export default AnimatedNavbar;
