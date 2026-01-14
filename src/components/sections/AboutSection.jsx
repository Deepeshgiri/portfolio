import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Passionate about creating efficient, scalable solutions that solve real-world problems
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <i className="bi bi-code-slash text-white text-4xl"></i>
            </div>
            <h4 className="text-2xl font-display font-bold mb-4 text-white">What I Do</h4>
            <p className="text-slate-400 leading-relaxed">
              I build modern web applications using cutting-edge technologies. 
              From responsive frontends to robust backend systems, I handle the full development lifecycle.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <i className="bi bi-lightbulb text-white text-4xl"></i>
            </div>
            <h4 className="text-2xl font-display font-bold mb-4 text-white">What I Specialize In</h4>
            <p className="text-slate-400 leading-relaxed">
              Full-stack JavaScript development, cloud architecture, and DevOps practices. 
              I focus on performance, scalability, and maintainable code.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <i className="bi bi-puzzle text-white text-4xl"></i>
            </div>
            <h4 className="text-2xl font-display font-bold mb-4 text-white">Problems I Solve</h4>
            <p className="text-slate-400 leading-relaxed">
              Complex business logic, performance bottlenecks, and user experience challenges. 
              I enjoy turning ideas into functional, elegant solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;