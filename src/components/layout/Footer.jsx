import React from 'react';
import { Link } from 'react-router-dom';
import { linkedin, github, facebook, instagram } from '../../images/index';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-slate-700/50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h5 className="text-2xl font-display font-bold mb-4 text-white">Deepesh Kumar Giri</h5>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              with modern technologies.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/deepesh-giri/" className="text-slate-400 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://github.com/Deepeshgiri" className="text-slate-400 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100006703937621" className="text-slate-400 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/_deepesh_giri/" className="text-slate-400 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h6 className="text-lg font-display font-semibold mb-4 text-white">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-primary-500 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-primary-500 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-lg font-display font-semibold mb-4 text-white">Technologies</h6>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-lg text-primary-400 text-sm">React</span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">Node.js</span>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">Angular</span>
              <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 text-sm">MongoDB</span>
            </div>
          </div>
          
          <div>
            <h6 className="text-lg font-display font-semibold mb-4 text-white">Contact Info</h6>
            <div className="space-y-3 text-slate-400">
              <p className="flex items-center gap-2">
                <i className="bi bi-envelope"></i>
                dr.deepeshgiri@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <i className="bi bi-geo-alt"></i>
                Sangrur, Punjab, India
              </p>
              <p className="flex items-center gap-2">
                <i className="bi bi-briefcase"></i>
                SDE at Pinnaclo EduCare
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Deepesh Kumar Giri. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;