import React, { useState } from 'react';
import { linkedin, github, facebook, } from '../images/index';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container-fluid py-5 animated-bg card-3d">
            <div className="rotate-shapes">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" style={{position: 'absolute', top: '10%', left: '5%'}}>
                    <rect x="10" y="10" width="30" height="30" rx="5" stroke="rgba(13,110,253,0.15)" strokeWidth="2" fill="rgba(13,110,253,0.06)"/>
                    <circle cx="25" cy="25" r="8" fill="rgba(13,110,253,0.12)"/>
                    <path d="M20 25 L25 20 L30 25 L25 30 Z" fill="rgba(255,255,255,0.4)"/>
                </svg>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" style={{position: 'absolute', top: '20%', right: '8%'}}>
                    <polygon points="21,3 38,12 38,30 21,39 4,30 4,12" stroke="rgba(220,53,69,0.15)" strokeWidth="2" fill="rgba(220,53,69,0.06)"/>
                    <circle cx="21" cy="21" r="6" fill="rgba(220,53,69,0.12)"/>
                </svg>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" style={{position: 'absolute', bottom: '30%', left: '12%'}}>
                    <circle cx="23" cy="23" r="18" stroke="rgba(25,135,84,0.15)" strokeWidth="2" fill="rgba(25,135,84,0.06)"/>
                    <rect x="15" y="15" width="16" height="16" rx="3" fill="rgba(25,135,84,0.12)"/>
                </svg>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{position: 'absolute', bottom: '15%', right: '15%'}}>
                    <path d="M20 5 L35 15 L35 25 L20 35 L5 25 L5 15 Z" stroke="rgba(102,16,242,0.15)" strokeWidth="2" fill="rgba(102,16,242,0.06)"/>
                    <circle cx="20" cy="20" r="5" fill="rgba(102,16,242,0.12)"/>
                </svg>
            </div>
            <div className="row justify-content-center" style={{position: 'relative', zIndex: 2}}>
                <div className="col-lg-10">
                    <div className="text-center mb-5">
                        <h1 className="display-4 text-primary mb-3">Get In Touch</h1>
                        <p className="lead text-muted">Let's discuss your next project or collaboration opportunity</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title text-primary h5 mb-4">Contact Information</h3>
                                    
                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-envelope-fill text-primary me-3 fs-5"></i>
                                            <div>
                                                <h6 className="mb-0">Email</h6>
                                                <a href="mailto:dr.deepeshgiri@gmail.com" className="text-muted text-decoration-none">
                                                    dr.deepeshgiri@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-geo-alt-fill text-primary me-3 fs-5"></i>
                                            <div>
                                                <h6 className="mb-0">Location</h6>
                                                <span className="text-muted">Sangrur, Punjab, India</span>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center mb-4">
                                            <i className="bi bi-briefcase-fill text-primary me-3 fs-5"></i>
                                            <div>
                                                <h6 className="mb-0">Current Role</h6>
                                                <span className="text-muted">Full Stack Developer at Pinnaclo EduCare</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h6 className="mb-3">Connect with me:</h6>
                                    <div className="d-flex gap-3">
                                        <a href="https://www.linkedin.com/in/deepesh-giri/" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                                            <img src={linkedin} alt="LinkedIn" width="20" className="me-2" />
                                            LinkedIn
                                        </a>
                                        <a href="https://github.com/Deepeshgiri" className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                                            <img src={github} alt="GitHub" width="20" className="me-2" />
                                            GitHub
                                        </a>
                                        <a href="https://www.facebook.com/profile.php?id=100006703937621" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                                            <img src={facebook} alt="Facebook" width="20" className="me-2" />
                                            Facebook
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h3 className="card-title text-primary h5 mb-4">Send me a message</h3>
                                    
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea
                                                className="form-control"
                                                id="message"
                                                name="message"
                                                rows="5"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        
                                        <button type="submit" className="btn btn-primary w-100">
                                            <i className="bi bi-send me-2"></i>
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="card shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary mb-3">Let's Build Something Amazing Together</h5>
                                    <p className="text-muted mb-3">
                                        I'm always interested in new opportunities, challenging projects, and innovative ideas. 
                                        Whether you're looking for a full-stack developer, need consultation on your tech stack, 
                                        or want to collaborate on an exciting project, I'd love to hear from you.
                                    </p>
                                    <div className="row text-start">
                                        <div className="col-md-4 mb-2">
                                            <i className="bi bi-code-slash text-primary me-2"></i>
                                            <small>Full Stack Development</small>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <i className="bi bi-gear text-primary me-2"></i>
                                            <small>DevOps & Infrastructure</small>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <i className="bi bi-lightbulb text-primary me-2"></i>
                                            <small>Technical Consultation</small>
                                        </div>
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

export default Contact;