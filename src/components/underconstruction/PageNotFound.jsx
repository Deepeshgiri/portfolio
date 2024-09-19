
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const PageNotFound = () => {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center bg-light">
      <Row className="w-100">
        <Col md={8} className="mx-auto text-center">
          <h1 className="display-1 fw-bold text-danger animate__animated animate__bounceIn">404</h1>
          <h2 className="mb-4 animate__animated animate__fadeIn animate__delay-1s">Oops! Page Not Found</h2>
          <p className="lead mb-5 animate__animated animate__fadeIn animate__delay-2s">
            We're sorry, but it seems the page you're looking for has vanished into the digital abyss. 
            Our team of expert navigators is currently charting a course to bring it back.
          </p>
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <p className="text-muted mb-4">
              In the meantime, why not explore our other pages? They're feeling a bit lonely and would love your company.
            </p>
            <Button as={Link} to="/" variant="primary" size="lg" className="me-3 shadow-sm">
              Take Me Home
            </Button>
            <Button variant="outline-secondary" size="lg" className="shadow-sm" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </Col>
      </Row>
      <footer className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center animate__animated animate__fadeIn animate__delay-4s">
        <p className="text-muted">
          <small>
            If you believe this page should exist, please contact our support team. 
            We appreciate your feedback as it helps us improve our digital cartography skills.
          </small>
        </p>
      </footer>
    </Container>
  );
};

export default PageNotFound;
