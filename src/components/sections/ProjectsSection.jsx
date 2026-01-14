import React, { useState, useEffect } from 'react';
import { dashboardfood, profilefood, restaurantinfo, chatpic, chatLogin, chatSign } from '../../images/index';
import { fetchGitHubData } from '../../services/socialApi';

const ProjectsSection = () => {
  const [githubData, setGithubData] = useState(null);
  const [activeCarousel, setActiveCarousel] = useState({});

  useEffect(() => {
    fetchGitHubData().then(setGithubData);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Food Ordering Platform',
      description: 'Full-stack MERN application with user authentication, restaurant dashboard, real-time order tracking, and Stripe payment integration.',
      images: [restaurantinfo, profilefood, dashboardfood],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      features: ['Live Demo Available', 'Full Source Code', 'Mobile Responsive'],
      links: {
        frontend: 'https://github.com/Deepeshgiri/food-order-frontend',
        backend: 'https://github.com/Deepeshgiri/food-order-backend',
        live: 'https://food-order-frontend.onrender.com/'
      },
      status: 'Live Demo'
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description: 'Socket.io powered chat app with real-time messaging, user authentication, online status, and room-based conversations.',
      images: [chatpic, chatLogin, chatSign],
      technologies: ['Node.js', 'Socket.io', 'JavaScript', 'Real-time'],
      features: ['Real-time Updates', 'Secure Authentication', 'Multi-user Support'],
      links: {
        github: 'https://github.com/Deepeshgiri/chat-app'
      },
      status: 'In Development'
    },
    {
      id: 3,
      title: 'Personal Portfolio',
      description: 'Modern, responsive portfolio website built with React and Tailwind. Features project showcase, contact forms, and optimized performance.',
      technologies: ['React', 'Tailwind', 'JavaScript', 'Responsive'],
      features: ['Fast Loading', 'Mobile First', 'SEO Optimized'],
      links: {
        github: 'https://github.com/Deepeshgiri/portfolio'
      },
      status: 'Open Source',
      isCurrentSite: true
    }
  ];

  const getYearsActive = () => {
    if (!githubData?.createdAt) return '4+';
    const years = new Date().getFullYear() - new Date(githubData.createdAt).getFullYear();
    return `${years}+`;
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-dark-400 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden">
              {project.images ? (
                <div className="relative">
                  <img 
                    src={project.images[activeCarousel[project.id] || 0]} 
                    alt={project.title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                      project.status === 'Live Demo' ? 'bg-green-500 text-white' :
                      project.status === 'In Development' ? 'bg-amber-500 text-white' :
                      'bg-cyan-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveCarousel({...activeCarousel, [project.id]: idx})}
                          className={`w-2 h-2 rounded-full transition-all ${
                            (activeCarousel[project.id] || 0) === idx ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative bg-gradient-to-br from-primary-600 to-primary-500 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="bi bi-github text-6xl mb-4"></i>
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p>This very website you're viewing!</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white rounded-lg text-sm font-semibold">{project.status}</span>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-lg text-primary-400 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-display font-bold mb-3">{project.title}</h4>
                <p className="text-dark-400 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-6">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-dark-400">
                      <i className="bi bi-check-circle text-green-500"></i>{feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.links.frontend && project.links.backend ? (
                    <>
                      <a href={project.links.frontend} className="flex-1 px-4 py-2 border border-dark-600 rounded-lg text-center hover:border-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github mr-1"></i>Frontend
                      </a>
                      <a href={project.links.backend} className="flex-1 px-4 py-2 border border-dark-600 rounded-lg text-center hover:border-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                        Backend
                      </a>
                      {project.links.live && (
                        <a href={project.links.live} className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-eye mr-1"></i>Live
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      {project.links.github && (
                        <a href={project.links.github} className="flex-1 px-4 py-2 border border-dark-600 rounded-lg text-center hover:border-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-github mr-1"></i>Source Code
                        </a>
                      )}
                      {project.isCurrentSite ? (
                        <button className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg" disabled>
                          <i className="bi bi-eye mr-1"></i>You're Here!
                        </button>
                      ) : (
                        <button className="flex-1 px-4 py-2 bg-dark-700 text-dark-400 rounded-lg" disabled>
                          <i className="bi bi-clock mr-1"></i>Demo Soon
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="glass-card p-12 text-center">
            <h4 className="text-2xl font-display font-bold mb-8">GitHub Activity & Contributions</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-primary-500 mb-2">{githubData?.repositories || '15+'}+</h4>
                <p className="text-dark-400 text-sm">Public Repositories</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-green-500 mb-2">{githubData?.followers || '25'}+</h4>
                <p className="text-dark-400 text-sm">Followers</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-amber-500 mb-2">{githubData?.languages?.length || '5'}+</h4>
                <p className="text-dark-400 text-sm">Languages Used</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-cyan-500 mb-2">{getYearsActive()}</h4>
                <p className="text-dark-400 text-sm">Years Active</p>
              </div>
            </div>
            <div className="mt-8">
              <a href={githubData?.url || 'https://github.com/Deepeshgiri'} className="inline-block px-8 py-3 bg-dark-800 border border-dark-600 rounded-xl hover:border-primary-500 transition-colors" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github mr-2"></i>View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;