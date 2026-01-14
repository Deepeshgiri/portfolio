import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import passPic from '../../images/pass_pic.jpg';
import ThemeToggle from '../ThemeToggle';
import './layout.css';

function AnimatedNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathnames = location.pathname.split('/').filter((x) => x);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-slate-900/50' : 'bg-slate-900/80 backdrop-blur-lg'
      } border-b border-slate-700/50`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center gap-3 group">
              <img src={passPic} alt="Logo" className="w-10 h-10 rounded-full ring-2 ring-primary-500/20 group-hover:ring-primary-500/50 transition-all" />
              <h3 className="text-xl font-display font-bold text-white group-hover:text-primary-400 transition-colors">Deepesh Giri</h3>
            </NavLink>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white hover:text-primary-400 transition-colors">
              <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
            </button>

            <div className="hidden lg:flex items-center gap-6">
              <ThemeToggle />
              <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-house"></i> Home
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-briefcase"></i> Projects
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-info-circle"></i> About
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-envelope"></i> Contact
              </NavLink>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden py-4 space-y-2 animate-fadeIn">
              <ThemeToggle />
              <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-house"></i> Home
              </NavLink>
              <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-briefcase"></i> Projects
              </NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-info-circle"></i> About
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                isActive ? 'text-primary-400 bg-primary-500/10' : 'text-slate-300 hover:text-primary-400 hover:bg-slate-800/50'
              }`}>
                <i className="bi bi-envelope"></i> Contact
              </NavLink>
            </div>
          )}
        </div>
      </nav>

      {pathnames.length > 0 && (
        <div className="bg-gradient-to-r from-slate-900/40 via-slate-800/40 to-slate-900/40 backdrop-blur-sm border-b border-slate-700/30">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <NavLink to="/" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1">
                <i className="bi bi-house-door text-xs"></i>
                <span>Home</span>
              </NavLink>
              {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;
                return (
                  <React.Fragment key={to}>
                    <i className="bi bi-chevron-right text-slate-600 text-xs"></i>
                    <NavLink 
                      to={to} 
                      className={`capitalize transition-colors ${
                        isLast ? 'text-primary-400 font-medium' : 'text-slate-400 hover:text-primary-400'
                      }`}
                    >
                      {value}
                    </NavLink>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AnimatedNavbar;