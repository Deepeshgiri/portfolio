import { Carousel } from "react-bootstrap"
import { dashboardfood, profilefood, restaurantinfo ,chatpic, chatLogin, chatSign    } from "../images"
import { useEffect } from "react";



const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);
  return (
    <>
      <div className="container-fluid py-5 tech-pattern card-3d">
        <div className="pulse-shapes">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{position: 'absolute', top: '5%', left: '8%'}}>
            <rect x="6" y="6" width="40" height="40" rx="8" stroke="rgba(13,110,253,0.2)" strokeWidth="2" fill="rgba(13,110,253,0.08)"/>
            <circle cx="26" cy="26" r="12" fill="rgba(13,110,253,0.15)"/>
            <path d="M18 26 L26 18 L34 26 L26 34 Z" fill="rgba(255,255,255,0.3)"/>
          </svg>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" style={{position: 'absolute', top: '15%', right: '12%'}}>
            <polygon points="22,4 40,16 40,28 22,40 4,28 4,16" stroke="rgba(40,167,69,0.2)" strokeWidth="2" fill="rgba(40,167,69,0.08)"/>
            <rect x="16" y="16" width="12" height="12" rx="2" fill="rgba(40,167,69,0.2)"/>
          </svg>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{position: 'absolute', bottom: '25%', left: '15%'}}>
            <circle cx="19" cy="19" r="16" stroke="rgba(111,66,193,0.2)" strokeWidth="2" fill="rgba(111,66,193,0.08)"/>
            <polygon points="19,8 28,15 28,23 19,30 10,23 10,15" fill="rgba(111,66,193,0.15)"/>
          </svg>
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" style={{position: 'absolute', bottom: '8%', right: '18%'}}>
            <rect x="8" y="8" width="30" height="30" rx="6" stroke="rgba(255,193,7,0.2)" strokeWidth="2" fill="rgba(255,193,7,0.08)"/>
            <circle cx="23" cy="23" r="8" stroke="rgba(255,193,7,0.3)" strokeWidth="2"/>
            <circle cx="23" cy="23" r="4" fill="rgba(255,193,7,0.2)"/>
          </svg>
        </div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="text-center mb-5">
            <h1 className="display-4 mb-3">Featured Projects</h1>
            <p className="lead text-muted mb-4">Real-world applications built with modern technologies</p>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a href="https://github.com/Deepeshgiri" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github me-2"></i>View All on GitHub
              </a>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card project-card h-100">
                <div className="position-relative">
                  <Carousel className="project-carousel">
                    <Carousel.Item>
                      <img src={restaurantinfo} alt="Food Ordering App" className="card-img-top" height={300} style={{objectFit: 'cover'}} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={profilefood} alt="Food Ordering App" className="card-img-top" height={300} style={{objectFit: 'cover'}} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={dashboardfood} alt="Food Ordering App" className="card-img-top" height={300} style={{objectFit: 'cover'}} />
                    </Carousel.Item>
                  </Carousel>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-success">Live Demo</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-success me-1">Node.js</span>
                    <span className="badge bg-info me-1">MongoDB</span>
                    <span className="badge bg-warning text-dark">Express</span>
                  </div>
                  <h3 className="h4 mb-3">Food Ordering Platform</h3>
                  <p className="text-muted mb-4 flex-grow-1">
                    Full-stack MERN application with user authentication, restaurant dashboard, real-time order tracking, 
                    and Stripe payment integration. Features include admin panel, order management, and responsive design.
                  </p>
                  <div className="mb-3">
                    <small className="text-muted">
                      <i className="bi bi-star-fill text-warning me-1"></i>Live Demo Available • 
                      <i className="bi bi-code-slash me-1"></i>Full Source Code • 
                      <i className="bi bi-phone me-1"></i>Mobile Responsive
                    </small>
                  </div>



                  <div className="d-flex gap-2">
                    <div className="btn-group flex-fill" role="group">
                      <a href="https://github.com/Deepeshgiri/food-order-frontend" className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github me-1"></i>Frontend
                      </a>
                      <a href="https://github.com/Deepeshgiri/food-order-backend" className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                        Backend
                      </a>
                    </div>
                    <a href="https://food-order-frontend.onrender.com/" className="btn btn-success flex-fill" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-eye me-1"></i>Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card project-card h-100">
                <div className="position-relative">
                  <Carousel className="project-carousel">
                    <Carousel.Item>
                      <img src={chatpic} alt="Chat App" className="card-img-top" height={300} style={{objectFit: 'cover'}} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={chatLogin} alt="Chat App Login" className="card-img-top" height={300} style={{objectFit: 'cover'}} />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={chatSign} alt="Chat App Signup" className="card-img-top" height={300} style={{objectFit: 'cover'}} />
                    </Carousel.Item>
                  </Carousel>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark">In Development</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">Node.js</span>
                    <span className="badge bg-success me-1">Socket.io</span>
                    <span className="badge bg-info me-1">JavaScript</span>
                    <span className="badge bg-warning text-dark">Real-time</span>
                  </div>
                  <h3 className="h4 mb-3">Real-Time Chat Application</h3>
                  <p className="text-muted mb-4 flex-grow-1">
                    Socket.io powered chat app with real-time messaging, user authentication, online status, 
                    message history, and room-based conversations. Built with Node.js backend and React frontend.
                  </p>
                  <div className="mb-3">
                    <small className="text-muted">
                      <i className="bi bi-lightning-fill text-primary me-1"></i>Real-time Updates • 
                      <i className="bi bi-shield-check text-success me-1"></i>Secure Authentication • 
                      <i className="bi bi-people me-1"></i>Multi-user Support
                    </small>
                  </div>

                  <div className="d-flex gap-2">
                    <a href="https://github.com/Deepeshgiri/chat-app" className="btn btn-outline-dark flex-fill" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github me-1"></i>Source Code
                    </a>
                    <button className="btn btn-secondary flex-fill" disabled>
                      <i className="bi bi-clock me-1"></i>Demo Soon
                    </button>
                  </div>
                </div>
              </div>
            </div>
        
            <div className="col-lg-6">
              <div className="card project-card h-100">
                <div className="position-relative">
                  <div className="bg-primary bg-gradient text-white p-4 text-center" style={{height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <i className="bi bi-github" style={{fontSize: '4rem'}} ></i>
                      <h4>Portfolio Website</h4>
                      <p className="mb-0">This very website you're viewing!</p>
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-info">Open Source</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-secondary me-1">Bootstrap</span>
                    <span className="badge bg-warning text-dark me-1">JavaScript</span>
                    <span className="badge bg-success me-1">Responsive</span>
                  </div>
                  <h3 className="h4 mb-3">Personal Portfolio</h3>
                  <p className="text-muted mb-4 flex-grow-1">
                    Modern, responsive portfolio website built with React and Bootstrap. Features include 
                    project showcase, contact forms, and optimized performance with clean, maintainable code.
                  </p>
                  <div className="mb-3">
                    <small className="text-muted">
                      <i className="bi bi-speedometer2 text-success me-1"></i>Fast Loading • 
                      <i className="bi bi-phone me-1"></i>Mobile First • 
                      <i className="bi bi-search me-1"></i>SEO Optimized
                    </small>
                  </div>
                  <div className="d-flex gap-2">
                    <a href="https://github.com/Deepeshgiri/portfolio" className="btn btn-outline-dark flex-fill" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github me-1"></i>Source Code
                    </a>
                    <button className="btn btn-primary flex-fill" disabled>
                      <i className="bi bi-eye me-1"></i>You're Here!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card project-card h-100">
                <div className="position-relative">
                  <div className="bg-success bg-gradient text-white p-4 text-center" style={{height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                      <i className="bi bi-code-square" style={{fontSize: '4rem'}} ></i>
                      <h4>More Projects</h4>
                      <p className="mb-0">Explore additional repositories</p>
                    </div>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-light text-dark">GitHub</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <span className="badge bg-dark me-1">Various</span>
                    <span className="badge bg-primary me-1">JavaScript</span>
                    <span className="badge bg-success me-1">Node.js</span>
                    <span className="badge bg-info me-1">React</span>
                  </div>
                  <h3 className="h4 mb-3">GitHub Repositories</h3>
                  <p className="text-muted mb-4 flex-grow-1">
                    Discover more projects, code samples, and contributions on my GitHub profile. 
                    Includes experiments, learning projects, and collaborative work across different technologies.
                  </p>
                  <div className="mb-3">
                    <small className="text-muted">
                      <i className="bi bi-folder text-primary me-1"></i>15+ Repositories • 
                      <i className="bi bi-star text-warning me-1"></i>Open Source • 
                      <i className="bi bi-git text-danger me-1"></i>Version Controlled
                    </small>
                  </div>
                  <div className="d-flex gap-2">
                    <a href="https://github.com/Deepeshgiri" className="btn btn-outline-dark flex-fill" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github me-1"></i>Profile
                    </a>
                    <a href="https://github.com/Deepeshgiri?tab=repositories" className="btn btn-success flex-fill" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-folder me-1"></i>All Repos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* GitHub Stats Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-5">
                  <h3 className="h4 mb-4">GitHub Activity & Contributions</h3>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="border-end border-2">
                        <h4 className="text-primary fw-bold mb-1">15+</h4>
                        <small className="text-muted">Public Repositories</small>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="border-end border-2">
                        <h4 className="text-success fw-bold mb-1">100+</h4>
                        <small className="text-muted">Commits This Year</small>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="border-end border-2">
                        <h4 className="text-warning fw-bold mb-1">5+</h4>
                        <small className="text-muted">Languages Used</small>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <h4 className="text-info fw-bold mb-1">3+</h4>
                      <small className="text-muted">Years Active</small>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted mb-3">
                      Active contributor with consistent commits and diverse project portfolio. 
                      Passionate about clean code, best practices, and continuous learning.
                    </p>
                    <a href="https://github.com/Deepeshgiri" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github me-2"></i>Follow on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Projects