import React from 'react';
import { passPic } from '../images/index';
import SkillsChart from '../components/charts/SkillsChart';
import ExperienceChart from '../components/charts/ExperienceChart';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-slate-400">
            Full Stack Developer • Problem Solver • Tech Innovator
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full blur-2xl opacity-20"></div>
              <img 
                src={passPic} 
                className="relative rounded-full w-72 h-72 object-cover border-4 border-slate-700/50 shadow-2xl" 
                alt="Deepesh Kumar Giri" 
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-display font-bold mb-6 text-white">Deepesh Kumar Giri</h2>
            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              Passionate Full Stack Developer with 4+ years of experience building scalable web applications. 
              Currently working as SDE at Pinnaclo EduCare, specializing in modern JavaScript technologies.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I focus on creating efficient, maintainable solutions that solve real-world problems. 
              My expertise spans the full development stack, from responsive frontends to robust backend systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-lg text-primary-400">Node.js</span>
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400">React</span>
              <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">Angular</span>
              <span className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">JavaScript</span>
              <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400">MongoDB</span>
              <span className="px-4 py-2 bg-slate-500/10 border border-slate-500/30 rounded-lg text-slate-400">Git</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-6">
            <SkillsChart />
          </div>
          <div className="glass-card p-6">
            <ExperienceChart />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h4 className="text-3xl font-display font-bold mb-8 text-white">Professional Experience</h4>
            <div className="space-y-8">
              <div className="border-l-2 border-primary-500 pl-6">
                <h6 className="text-xl font-semibold mb-2 text-white">SDE - Pinnaclo EduCare</h6>
                <p className="text-sm text-slate-400 mb-3">Oct 2024 - Present</p>
                <p className="text-slate-400">Leading full-stack development initiatives</p>
              </div>
              <div className="border-l-2 border-green-500 pl-6">
                <h6 className="text-xl font-semibold mb-2 text-white">Software Engineer Intern - Shivam Infosystem</h6>
                <p className="text-sm text-slate-400 mb-3">Jun 2024 - Sep 2024</p>
                <p className="text-slate-400">Contributed to innovative web projects</p>
              </div>
              <div className="border-l-2 border-amber-500 pl-6">
                <h6 className="text-xl font-semibold mb-2 text-white">Associate Developer - Softspin Technology</h6>
                <p className="text-sm text-slate-400 mb-3">Jan 2021 - Mar 2023</p>
                <p className="text-slate-400">Full-stack development and IT infrastructure management including networking, hardware setup, and system administration</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h4 className="text-3xl font-display font-bold mb-8 text-white">Education</h4>
            <div className="space-y-8">
              <div className="border-l-2 border-primary-500 pl-6">
                <h6 className="text-xl font-semibold text-white">BTech Computer Science</h6>
                <p className="text-slate-400 mb-2">Maharaja Ranjit Singh Punjab Technical University</p>
                <p className="text-sm text-slate-500">2016 - 2020</p>
              </div>
              <div className="border-l-2 border-green-500 pl-6">
                <h6 className="text-xl font-semibold text-white">Integrated Diploma</h6>
                <p className="text-slate-400 mb-2">Sant Longowal Institute of Engineering and Technology</p>
                <p className="text-sm text-slate-500">Completed 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;