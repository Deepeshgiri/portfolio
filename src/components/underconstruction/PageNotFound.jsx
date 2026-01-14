import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-display font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-4xl font-display font-bold mb-6">Oops! Page Not Found</h2>
        <p className="text-xl text-dark-400 mb-8">
          We're sorry, but it seems the page you're looking for has vanished into the digital abyss. 
          Our team of expert navigators is currently charting a course to bring it back.
        </p>
        <div className="mb-8">
          <p className="text-dark-500 mb-6">
            In the meantime, why not explore our other pages? They're feeling a bit lonely and would love your company.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Take Me Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              Go Back
            </button>
          </div>
        </div>
        <footer className="text-dark-500 text-sm">
          If you believe this page should exist, please contact our support team. 
          We appreciate your feedback as it helps us improve our digital cartography skills.
        </footer>
      </div>
    </div>
  );
};

export default PageNotFound;