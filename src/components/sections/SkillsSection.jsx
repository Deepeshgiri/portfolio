import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'bi-palette',
      gradient: 'from-primary-600 to-primary-500',
      skills: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind']
    },
    {
      title: 'Backend',
      icon: 'bi-server',
      gradient: 'from-green-600 to-green-500',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.io']
    },
    {
      title: 'Database',
      icon: 'bi-database',
      gradient: 'from-amber-600 to-amber-500',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis']
    },
    {
      title: 'DevOps & Tools',
      icon: 'bi-gear',
      gradient: 'from-cyan-600 to-cyan-500',
      skills: ['Git', 'Docker', 'AWS', 'Heroku', 'Netlify', 'CI/CD']
    },
    {
      title: 'IT Infrastructure',
      icon: 'bi-hdd-network',
      gradient: 'from-purple-600 to-purple-500',
      skills: ['PC Repair', 'Networking', 'WiFi Setup', 'Hardware Installation', 'Software Installation']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8">
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mr-4`}>
                  <i className={`${category.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="text-2xl font-display font-bold text-white">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 text-sm font-medium hover:border-primary-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;