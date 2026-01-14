import React, { useState, useEffect } from 'react';
import { fetchGitHubData } from '../../services/socialApi';
import { linkedin, github, facebook, instagram } from '../../images/index';

const SocialSection = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubData().then(data => {
      setGithubData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Social Presence</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Connect with me across different platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <img src={github} alt="GitHub" className="w-12 h-12" />
              <div>
                <h5 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  GitHub 
                  <span className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-xs font-semibold">Live Data</span>
                </h5>
                <p className="text-sm text-slate-400">{githubData?.repositories} repositories</p>
              </div>
            </div>
            <h6 className="text-lg font-semibold text-slate-300 mb-3">@{githubData?.username}</h6>
            <p className="text-slate-400 text-sm mb-4">{githubData?.bio}</p>
            <div className="flex gap-6 mb-4">
              <span className="text-slate-400"><strong className="text-white">{githubData?.followers}</strong> followers</span>
              <span className="text-slate-400"><strong className="text-white">{githubData?.following}</strong> following</span>
            </div>
            {githubData?.languages && (
              <div className="flex flex-wrap gap-2 mb-6">
                {githubData.languages.slice(0, 3).map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 text-xs">{lang}</span>
                ))}
              </div>
            )}
            <a href={githubData?.url} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-600 rounded-xl hover:border-primary-500 transition-colors text-slate-200" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>View Profile
            </a>
          </div>
          
          <div className="glass-card p-8 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <img src={linkedin} alt="LinkedIn" className="w-12 h-12" />
              <div>
                <h5 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  LinkedIn 
                  <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-400 text-xs font-semibold">API Restricted</span>
                </h5>
                <p className="text-sm text-slate-400">500+ connections</p>
              </div>
            </div>
            <h6 className="text-lg font-semibold text-slate-300 mb-3">Deepesh Kumar Giri</h6>
            <p className="text-slate-400 text-sm mb-4">Full Stack Developer | SDE at Pinnaclo EduCare</p>
            <p className="text-slate-400 text-sm mb-6 flex items-center gap-2">
              <i className="bi bi-geo-alt"></i>Sangrur, Punjab, India
            </p>
            <a href="https://www.linkedin.com/in/deepesh-giri/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-xl hover:bg-primary-500/20 transition-colors text-primary-400" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>View Profile
            </a>
          </div>
          
          <div className="glass-card p-8 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <img src={instagram} alt="Instagram" className="w-12 h-12" />
              <div>
                <h5 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  Instagram 
                  <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-400 text-xs font-semibold">API Restricted</span>
                </h5>
                <p className="text-sm text-slate-400">Personal account</p>
              </div>
            </div>
            <h6 className="text-lg font-semibold text-slate-300 mb-3">@_deepesh_giri</h6>
            <p className="text-slate-400 text-sm mb-6">Full Stack Developer 💻 | Tech Enthusiast 🚀</p>
            <a href="https://www.instagram.com/_deepesh_giri/" className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500/10 border border-pink-500/30 rounded-xl hover:bg-pink-500/20 transition-colors text-pink-400" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>View Profile
            </a>
          </div>
          
          <div className="glass-card p-8 group hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <img src={facebook} alt="Facebook" className="w-12 h-12" />
              <div>
                <h5 className="text-xl font-display font-bold text-white flex items-center gap-2">
                  Facebook 
                  <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-lg text-amber-400 text-xs font-semibold">API Restricted</span>
                </h5>
                <p className="text-sm text-slate-400">Personal profile</p>
              </div>
            </div>
            <h6 className="text-lg font-semibold text-slate-300 mb-3">Deepesh Kumar Giri</h6>
            <p className="text-slate-400 text-sm mb-6">Software Development Engineer passionate about creating innovative web solutions</p>
            <a href="https://www.facebook.com/profile.php?id=100006703937621" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-xl hover:bg-blue-500/20 transition-colors text-blue-400" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>View Profile
            </a>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="glass-card p-6 border-l-4 border-primary-500">
            <div className="flex items-start gap-3">
              <i className="bi bi-info-circle text-primary-400 text-xl mt-1"></i>
              <div>
                <p className="text-slate-300 font-semibold mb-1">API Integration Note</p>
                <p className="text-slate-400 text-sm">GitHub data is fetched live via API. Other platforms require special API approvals and OAuth tokens for real-time data access.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;