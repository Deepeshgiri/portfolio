import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle me-3"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'}`} 
         style={{ fontSize: '1.1rem' }}></i>
    </button>
  );
};

export default ThemeToggle;