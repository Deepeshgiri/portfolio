import React from 'react';
import { passPic } from '../images/index';

const About = () => {
    return (
        <div className="container-fluid py-5 animated-bg card-3d">
            <div className="floating-shapes">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <circle cx="21" cy="21" r="18" stroke="rgba(13,110,253,0.1)" strokeWidth="2" fill="rgba(13,110,253,0.05)"/>
                    <rect x="12" y="12" width="18" height="18" rx="2" fill="rgba(13,110,253,0.1)"/>
                </svg>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <polygon points="18,3 33,15 33,21 18,33 3,21 3,15" stroke="rgba(40,167,69,0.1)" strokeWidth="2" fill="rgba(40,167,69,0.05)"/>
                </svg>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="6" stroke="rgba(111,66,193,0.1)" strokeWidth="2" fill="rgba(111,66,193,0.05)"/>
                    <circle cx="24" cy="24" r="10" fill="rgba(111,66,193,0.1)"/>
                </svg>
            </div>
            <div className="container" style={{position: 'relative', zIndex: 2}}>
                <div className="text-center mb-5">
                    <h1 className="display-4 mb-3">About Me</h1>
                    <p className="lead text-muted">Full Stack Developer • Tech Explorer • Problem Solver</p>
                    <div className="mx-auto" style={{width: '100px', height: '4px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '2px'}}></div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-lg-4 text-center mb-4">
                        <div className="position-relative d-inline-block">
                            <img src={passPic} className="img-fluid rounded-circle profile-img" alt="Deepesh Kumar Giri" width="280" />
                            <div className="position-absolute bottom-0 end-0 bg-success rounded-circle" style={{width: '30px', height: '30px', border: '4px solid white'}}>
                                <i className="bi bi-check text-white" style={{fontSize: '1rem', lineHeight: '22px'}}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-lg-4">
                            <h2 className="h2 mb-3" style={{color: '#667eea'}}>Deepesh Kumar Giri</h2>
                            <p className="fs-5 text-muted mb-4">
                                Dedicated Full Stack Developer with 4+ years of professional experience and a strong foundation in Computer Science. 
                                My journey began with an integrated diploma from SLIET in 2016, followed by a BTech from MRSPTU in 2020.
                            </p>
                            <p className="text-muted mb-4">
                                Currently working as SDE at Pinnaclo EduCare, I specialize in Node.js, Angular, React, 
                                and both SQL/NoSQL databases. Active on GitHub with 15+ public repositories and consistent contributions.
                            </p>
                            <div className="mb-4">
                                <a href="https://github.com/Deepeshgiri" className="btn btn-outline-primary me-3" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github me-2"></i>GitHub Profile
                                </a>
                                <a href="https://www.linkedin.com/in/deepesh-giri/" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin me-2"></i>LinkedIn
                                </a>
                            </div>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-primary">Node.js</span>
                                <span className="badge bg-info">Angular</span>
                                <span className="badge bg-success">React</span>
                                <span className="badge bg-warning text-dark">JavaScript</span>
                                <span className="badge bg-secondary">MongoDB</span>
                                <span className="badge bg-dark">Git</span>
                                <span className="badge bg-danger">Express.js</span>
                                <span className="badge bg-primary">TypeScript</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 mb-5">
                    <div className="pulse-shapes" style={{position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none'}}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{position: 'absolute', top: '10%', left: '20%'}}>
                            <circle cx="14" cy="14" r="10" stroke="rgba(220,53,69,0.15)" strokeWidth="2" fill="rgba(220,53,69,0.08)"/>
                            <rect x="9" y="9" width="10" height="10" rx="2" fill="rgba(220,53,69,0.12)"/>
                        </svg>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{position: 'absolute', top: '15%', right: '25%'}}>
                            <polygon points="16,4 28,10 28,22 16,28 4,22 4,10" stroke="rgba(255,193,7,0.15)" strokeWidth="2" fill="rgba(255,193,7,0.08)"/>
                        </svg>
                    </div>
                    <div className="col-lg-6" style={{position: 'relative', zIndex: 2}}>
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <i className="bi bi-gear-fill me-3" style={{fontSize: '1.5rem', color: '#667eea'}}></i>
                                    <h3 className="h5 mb-0">Technical Skills</h3>
                                </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>JavaScript</li>
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Node.js</li>
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Angular</li>
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>React</li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>SQL/NoSQL</li>
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Git</li>
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>DevOps</li>
                                                <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>MongoDB</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title text-primary h5">Experience</h3>
                                    <div className="timeline">
                                        <div className="mb-3">
                                            <h6 className="fw-bold mb-1">SDE - Pinnaclo EduCare</h6>
                                            <small className="text-muted">Oct 2024 - Present | Sangrur, Punjab</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="fw-bold mb-1">Software Engineer Intern - Shivam Infosystem</h6>
                                            <small className="text-muted">Jun 2024 - Sep 2024 | Delhi</small>
                                        </div>
                                        <div className="mb-3">
                                            <h6 className="fw-bold mb-1">Associate Software Developer - Softspin Technology</h6>
                                            <small className="text-muted">Jan 2021 - Mar 2023 | Hyderabad</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title text-primary h5 mb-3">Education</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6 className="fw-bold">Bachelor of Technology - Computer Science</h6>
                                            <p className="text-muted mb-0">Maharaja Ranjit Singh Punjab Technical University (MRSPTU)</p>
                                            <small className="text-muted">June 2016 - August 2020 | Bathinda</small>
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className="fw-bold">Integrated Diploma</h6>
                                            <p className="text-muted mb-0">Sant Longowal Institute of Engineering and Technology (SLIET)</p>
                                            <small className="text-muted">Completed 2016</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};

export default About;