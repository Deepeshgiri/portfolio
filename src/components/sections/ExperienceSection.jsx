import React from 'react';
import SkillsChart from '../charts/SkillsChart';
import ExperienceChart from '../charts/ExperienceChart';

const ExperienceSection = () => {
  const stats = [
    { label: 'Years Experience', value: '4+', icon: 'bi-calendar-check', gradient: 'from-primary-600 to-primary-500' },
    { label: 'Projects Completed', value: '15+', icon: 'bi-folder-check', gradient: 'from-green-600 to-green-500' },
    { label: 'Technologies', value: '8+', icon: 'bi-code-slash', gradient: 'from-amber-600 to-amber-500' },
    { label: 'Companies', value: '3', icon: 'bi-building', gradient: 'from-cyan-600 to-cyan-500' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience & Stats</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My professional journey and technical expertise visualized
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${stat.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-6">
            <SkillsChart />
          </div>
          <div className="glass-card p-6">
            <ExperienceChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;