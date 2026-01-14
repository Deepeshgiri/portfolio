import React, { useState } from 'react';
import { linkedin, github } from '../images/index';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-3xl font-display font-bold mb-8 text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-envelope-fill text-primary-500 text-xl"></i>
                </div>
                <div>
                  <h6 className="font-semibold mb-1 text-white">Email</h6>
                  <a href="mailto:dr.deepeshgiri@gmail.com" className="text-slate-400 hover:text-primary-500 transition-colors">
                    dr.deepeshgiri@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-geo-alt-fill text-green-500 text-xl"></i>
                </div>
                <div>
                  <h6 className="font-semibold mb-1 text-white">Location</h6>
                  <span className="text-slate-400">Sangrur, Punjab, India</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-briefcase-fill text-amber-500 text-xl"></i>
                </div>
                <div>
                  <h6 className="font-semibold mb-1 text-white">Current Role</h6>
                  <span className="text-slate-400">SDE at Pinnaclo EduCare</span>
                </div>
              </div>
            </div>

            <h6 className="font-semibold mb-4 text-white">Connect with me:</h6>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/deepesh-giri/" className="flex items-center gap-2 px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-xl hover:bg-primary-500/20 transition-colors text-primary-400" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="https://github.com/Deepeshgiri" className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-xl hover:bg-slate-700 transition-colors text-slate-300" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-3xl font-display font-bold mb-8 text-white">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                <i className="bi bi-send"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;