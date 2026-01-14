import React from 'react';
import { Link } from 'react-router-dom';
import { passPic } from '../../images/index';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-transparent to-primary-800/20"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-semibold">
              Full Stack Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white">
              Hi, I'm <span className="gradient-text">Deepesh</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
              Building the future with code • Problem Solver • Tech Innovator
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Crafting scalable web applications with modern technologies. 
              Specialized in React, Node.js, and cloud infrastructure with 4+ years of experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn-secondary">
                Let's Connect
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={passPic} 
                className="relative rounded-full w-80 h-80 object-cover border-4 border-slate-700/50 shadow-2xl" 
                alt="Deepesh Kumar Giri" 
              />
              <div className="absolute bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg animate-pulse">
                <i className="bi bi-check-lg text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;