import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'




import {  instagram, github, linkedin, facebook, passPic } from '../images/index'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="container-fluid p-0 card-3d">
            {/* Hero Section */}
            <section className="hero-bg text-white py-5">
                <div className="floating-shapes">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <circle cx="30" cy="30" r="25" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
                        <path d="M20 30 L30 20 L40 30 L30 40 Z" fill="rgba(255,255,255,0.1)"/>
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="5" y="5" width="30" height="30" rx="5" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
                        <circle cx="20" cy="20" r="8" fill="rgba(255,255,255,0.1)"/>
                    </svg>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <polygon points="25,5 45,40 5,40" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
                        <circle cx="25" cy="30" r="5" fill="rgba(255,255,255,0.1)"/>
                    </svg>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M17.5 2 L32 12 L32 23 L17.5 33 L3 23 L3 12 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
                    </svg>
                </div>
                <div className="container py-5" style={{position: 'relative', zIndex: 2}}>
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-center mb-4 mb-lg-0">
                            <div style={{transform: 'translateZ(20px)'}}>
                                <img src={passPic} className="img-fluid rounded-circle border border-4 border-white profile-img" alt="Deepesh Kumar Giri" width="280" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h1 className="display-3 fw-bold mb-3">
                                Hi, I'm <span className="text-warning">Deepesh Kumar Giri</span>
                            </h1>
                            <h2 className="h4 mb-4 text-light">
                                Full Stack Developer • SDE at Pinnaclo EduCare • Tech Enthusiast
                            </h2>
                            <p className="lead mb-4">
                                Passionate about building scalable web applications using modern technologies like Node.js, Angular, React, and cloud infrastructure. 
                                Currently working as a Software Development Engineer with 3+ years of experience in full-stack development.
                            </p>
                            <div className="d-flex flex-wrap gap-3 mb-4">
                                <Link to="/projects" className="btn btn-light btn-lg px-4">
                                    <i className="bi bi-folder me-2"></i>View My Work
                                </Link>
                                <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                                    <i className="bi bi-envelope me-2"></i>Let's Connect
                                </Link>
                                <a href="https://drive.google.com/file/d/your-resume-link" className="btn btn-warning btn-lg px-4" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-download me-2"></i>Download CV
                                </a>
                            </div>
                            <div className="d-flex gap-3">
                                <a href="https://www.linkedin.com/in/deepesh-giri/" className="btn btn-outline-light btn-sm rounded-circle p-2" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt="LinkedIn" width="24" />
                                </a>
                                <a href="https://github.com/Deepeshgiri" className="btn btn-outline-light btn-sm rounded-circle p-2" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt="GitHub" width="24" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100006703937621" className="btn btn-outline-light btn-sm rounded-circle p-2" target="_blank" rel="noopener noreferrer">
                                    <img src={facebook} alt="Facebook" width="24" />
                                </a>
                                <a href="https://www.instagram.com/_deepesh_giri/" className="btn btn-outline-light btn-sm rounded-circle p-2" target="_blank" rel="noopener noreferrer">
                                    <img src={instagram} alt="Instagram" width="24" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-5 bg-light animated-bg">
                <div className="floating-shapes">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <rect x="5" y="5" width="25" height="25" rx="4" stroke="rgba(13,110,253,0.2)" strokeWidth="2" fill="rgba(13,110,253,0.1)"/>
                        <circle cx="17.5" cy="17.5" r="6" fill="rgba(13,110,253,0.15)"/>
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <polygon points="20,5 35,13 35,27 20,35 5,27 5,13" stroke="rgba(25,135,84,0.2)" strokeWidth="2" fill="rgba(25,135,84,0.1)"/>
                    </svg>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="12" stroke="rgba(255,193,7,0.2)" strokeWidth="2" fill="rgba(255,193,7,0.1)"/>
                        <rect x="10" y="10" width="12" height="12" rx="2" fill="rgba(255,193,7,0.2)"/>
                    </svg>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <path d="M19 4 L33 11 L33 27 L19 34 L5 27 L5 11 Z" stroke="rgba(23,162,184,0.2)" strokeWidth="2" fill="rgba(23,162,184,0.1)"/>
                    </svg>
                </div>
                <div className="container" style={{position: 'relative', zIndex: 2}}>
                    <div className="row text-center">
                        <div className="col-md-3 mb-4">
                            <div className="card border-0 h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-calendar-check text-primary mb-2" style={{fontSize: '2rem'}}></i>
                                    <h3 className="display-6 text-primary fw-bold">4+</h3>
                                    <p className="text-muted mb-0">Years Experience</p>
                                    <small className="text-muted">Since 2021</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card border-0 h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-github text-success mb-2" style={{fontSize: '2rem'}}></i>
                                    <h3 className="display-6 text-success fw-bold">15+</h3>
                                    <p className="text-muted mb-0">GitHub Repositories</p>
                                    <small className="text-muted">Public Projects</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card border-0 h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-code-slash text-warning mb-2" style={{fontSize: '2rem'}}></i>
                                    <h3 className="display-6 text-warning fw-bold">8+</h3>
                                    <p className="text-muted mb-0">Technologies</p>
                                    <small className="text-muted">Actively Used</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-4">
                            <div className="card border-0 h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="bi bi-building text-info mb-2" style={{fontSize: '2rem'}}></i>
                                    <h3 className="display-6 text-info fw-bold">3</h3>
                                    <p className="text-muted mb-0">Companies</p>
                                    <small className="text-muted">Professional Experience</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-5 code-bg">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
                        <p className="lead text-muted">
                            Technologies I work with to build amazing applications
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-primary mb-3">
                                        <i className="bi bi-code-slash me-2"></i>Frontend Development
                                    </h5>
                                    <div className="mb-3">
                                        <span className="badge bg-primary me-2 mb-2">React.js</span>
                                        <span className="badge bg-danger me-2 mb-2">Angular</span>
                                        <span className="badge bg-warning text-dark me-2 mb-2">JavaScript</span>
                                        <span className="badge bg-info me-2 mb-2">TypeScript</span>
                                        <span className="badge bg-secondary me-2 mb-2">HTML5</span>
                                        <span className="badge bg-success me-2 mb-2">CSS3</span>
                                        <span className="badge bg-dark me-2 mb-2">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-success mb-3">
                                        <i className="bi bi-server me-2"></i>Backend Development
                                    </h5>
                                    <div className="mb-3">
                                        <span className="badge bg-success me-2 mb-2">Node.js</span>
                                        <span className="badge bg-dark me-2 mb-2">Express.js</span>
                                        <span className="badge bg-primary me-2 mb-2">REST APIs</span>
                                        <span className="badge bg-info me-2 mb-2">GraphQL</span>
                                        <span className="badge bg-warning text-dark me-2 mb-2">Socket.io</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-warning mb-3">
                                        <i className="bi bi-database me-2"></i>Database & Storage
                                    </h5>
                                    <div className="mb-3">
                                        <span className="badge bg-success me-2 mb-2">MongoDB</span>
                                        <span className="badge bg-primary me-2 mb-2">MySQL</span>
                                        <span className="badge bg-danger me-2 mb-2">Redis</span>
                                        <span className="badge bg-secondary me-2 mb-2">PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title text-info mb-3">
                                        <i className="bi bi-cloud me-2"></i>DevOps & Tools
                                    </h5>
                                    <div className="mb-3">
                                        <span className="badge bg-dark me-2 mb-2">Git</span>
                                        <span className="badge bg-primary me-2 mb-2">Docker</span>
                                        <span className="badge bg-warning text-dark me-2 mb-2">AWS</span>
                                        <span className="badge bg-success me-2 mb-2">Heroku</span>
                                        <span className="badge bg-info me-2 mb-2">Netlify</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">What I Offer</h2>
                        <p className="lead text-muted">
                            Professional development services to bring your ideas to life
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center p-4">
                                    <div className="bg-primary bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                                        <i className="bi bi-code-slash text-white" style={{fontSize: '2rem'}}></i>
                                    </div>
                                    <h4 className="mb-3">Full Stack Development</h4>
                                    <p className="text-muted mb-4">
                                        Complete web application development from frontend UI/UX to backend APIs and database design. 
                                        Modern, responsive, and scalable solutions.
                                    </p>
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>React & Angular Applications</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Node.js Backend Development</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Database Design & Optimization</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>API Development & Integration</li>
                                    </ul>
                                    <Link to="/projects" className="btn btn-primary">
                                        View My Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center p-4">
                                    <div className="bg-success bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                                        <i className="bi bi-cloud-arrow-up text-white" style={{fontSize: '2rem'}}></i>
                                    </div>
                                    <h4 className="mb-3">DevOps & Deployment</h4>
                                    <p className="text-muted mb-4">
                                        Cloud infrastructure setup, CI/CD pipeline implementation, and automated deployment strategies 
                                        for reliable and scalable applications.
                                    </p>
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>AWS & Cloud Deployment</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Docker Containerization</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>CI/CD Pipeline Setup</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Performance Monitoring</li>
                                    </ul>
                                    <Link to="/about" className="btn btn-success">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body text-center p-4">
                                    <div className="bg-warning bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                                        <i className="bi bi-lightbulb text-white" style={{fontSize: '2rem'}}></i>
                                    </div>
                                    <h4 className="mb-3">Technical Consultation</h4>
                                    <p className="text-muted mb-4">
                                        Expert advice on technology stack selection, architecture design, code review, 
                                        and performance optimization for your projects.
                                    </p>
                                    <ul className="list-unstyled text-start">
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Architecture Planning</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Code Review & Optimization</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Technology Stack Selection</li>
                                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Performance Analysis</li>
                                    </ul>
                                    <Link to="/contact" className="btn btn-warning">
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-5 animated-bg">
                <div className="pulse-shapes">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" style={{position: 'absolute', top: '8%', left: '10%'}}>
                        <circle cx="22" cy="22" r="18" stroke="rgba(111,66,193,0.18)" strokeWidth="2" fill="rgba(111,66,193,0.08)"/>
                        <polygon points="22,10 32,16 32,28 22,34 12,28 12,16" fill="rgba(111,66,193,0.15)"/>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{position: 'absolute', top: '25%', right: '8%'}}>
                        <rect x="6" y="6" width="24" height="24" rx="5" stroke="rgba(13,110,253,0.18)" strokeWidth="2" fill="rgba(13,110,253,0.08)"/>
                        <circle cx="18" cy="18" r="7" fill="rgba(13,110,253,0.15)"/>
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{position: 'absolute', bottom: '20%', left: '15%'}}>
                        <path d="M20 6 L34 14 L34 26 L20 34 L6 26 L6 14 Z" stroke="rgba(25,135,84,0.18)" strokeWidth="2" fill="rgba(25,135,84,0.08)"/>
                        <rect x="14" y="14" width="12" height="12" rx="2" fill="rgba(25,135,84,0.15)"/>
                    </svg>
                </div>
                <div className="container" style={{position: 'relative', zIndex: 2}}>
                    <div className="text-center mb-5">
                        <h2 className="display-5 fw-bold mb-3">Professional Journey</h2>
                        <p className="lead text-muted">
                            My career progression and key achievements
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <h5 className="card-title text-primary mb-0">Software Development Engineer</h5>
                                                <span className="badge bg-success">Current</span>
                                            </div>
                                            <h6 className="text-muted mb-2">Pinnaclo EduCare • Oct 2024 - Present</h6>
                                            <p className="card-text">
                                                Leading full-stack development initiatives, working as the sole developer responsible for 
                                                end-to-end application development and deployment.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary mb-0">Software Engineer Intern</h5>
                                            <h6 className="text-muted mb-2">Shivam Infosystem • Jun 2024 - Sep 2024</h6>
                                            <p className="card-text">
                                                Contributed to innovative projects, expanded expertise in full-stack development, 
                                                and worked with modern web technologies.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary mb-0">Associate Software Developer</h5>
                                            <h6 className="text-muted mb-2">Softspin Technology • Jan 2021 - Mar 2023</h6>
                                            <p className="card-text">
                                                Started as Tech Support and evolved into a developer role. Gained experience in 
                                                software development lifecycle and client interaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="hero-bg text-white py-5">
                <div className="floating-shapes">
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <rect x="10" y="10" width="25" height="25" rx="3" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="rgba(255,255,255,0.08)"/>
                        <path d="M15 22.5 L22.5 15 L30 22.5 L22.5 30 Z" fill="rgba(255,255,255,0.15)"/>
                    </svg>
                    <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
                        <circle cx="27.5" cy="27.5" r="20" stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="rgba(255,255,255,0.06)"/>
                        <rect x="20" y="20" width="15" height="15" rx="2" fill="rgba(255,255,255,0.12)"/>
                    </svg>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <path d="M19 3 L35 14 L35 24 L19 35 L3 24 L3 14 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="rgba(255,255,255,0.05)"/>
                    </svg>
                </div>
                <div className="container text-center" style={{position: 'relative', zIndex: 2}}>
                    <h2 className="display-5 fw-bold mb-3">Ready to Start Your Project?</h2>
                    <p className="lead mb-4">
                        Let's discuss how I can help bring your ideas to life with modern web technologies
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-3">
                        <Link to="/contact" className="btn btn-light btn-lg px-4">
                            <i className="bi bi-envelope me-2"></i>Get In Touch
                        </Link>
                        <Link to="/projects" className="btn btn-outline-light btn-lg px-4">
                            <i className="bi bi-eye me-2"></i>View Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage