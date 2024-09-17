import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

function UnderConstruction() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center bg-light">
      {/* Animated Header */}
      <h1 className="display-4 animate__animated animate__bounceInDown">
        🚧 Site Under Construction 🚧
      </h1>

      {/* Animated Subheading */}
      <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
        We're working hard to bring you something amazing!
      </p>

      {/* Animated Loader */}
      <div className="mt-5 animate__animated animate__fadeInUp animate__delay-2s">
        <div className="spinner-grow text-primary mx-2" role="status"></div>
        <div className="spinner-grow text-secondary mx-2" role="status"></div>
        <div className="spinner-grow text-success mx-2" role="status"></div>
        <div className="spinner-grow text-danger mx-2" role="status"></div>
        <div className="spinner-grow text-warning mx-2" role="status"></div>
      </div>

      {/* Notification Section */}
      <p className="mt-4 animate__animated  animate__fadeIn animate__delay-3s">
        Meanwhile, feel free to <a href="https://www.linkedin.com/in/deepesh-giri/">reach out</a> for inquiries or updates!
      </p>

      {/* Footer */}
      <footer className="text-muted mt-auto pt-5 animate__animated animate__fadeIn animate__delay-4s">
        <small>&copy; 2024 Deepesh Kumar | All rights reserved.</small>
      </footer>
    </div>
  );
}

export default UnderConstruction;
