import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'


import passPic from '../images/pass_pic.jpg'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import instagram from '../images/instagram.png'

const Homepage = () => {
    return (
        <div className="container-fluid bg-light">
            <header className="row animate__animated animate__fadeInDown">
                <div className="col-12 text-center">
                    <h1 className="mt-4 display-5 text-primary">Welcome to My Portfolio</h1>
                </div>
            </header>

    

            <section className="row align-items-center my-1 py-1">
            <div className="col-md-3 text-center">
                    <img src={passPic} className="img-fluid rounded-circle shadow" alt="Deepesh" width="300" />
                </div>
                
                <div className="col-md-6">
                    <h1 className="display-3 font-weight-bold text-dark">
                        Hello!! I am <br />
                        <span className="text-primary">Deepesh.</span>
                        <br />
                        A <span className="text-success"></span> <br />Developer.
                    </h1>
                    <div className="mt-4">
                        <a href="https://www.facebook.com/profile.php?id=100006703937621" className="mr-3"><img src={facebook} alt="Facebook" width="40" /></a>
                        <a href="https://www.linkedin.com/in/deepesh-giri/" className="mr-3"><img src={linkedin} alt="LinkedIn" width="40" /></a>
                        <a href="https://github.com/Deepeshgiri" className="mr-3"><img src={github} alt="GitHub" width="40" /></a>
                        <a href="https://www.instagram.com/_deepesh_giri/"><img src={instagram} alt="Instagram" width="40" /></a>
                    </div>
                </div>
                
            </section>

            <section className="row animate__animated animate__fadeIn animate__delay-1s">
                <div className="col-12 text-center">
                   
                    <p className="lead text-center mt-4 animate__animated animate__fadeInLeft animate__delay-2s text-secondary">
                        Discover the world of coding with passion and innovation
                    </p>
                </div>
            </section>

            <section className="row mt-5 animate__animated animate__fadeIn animate__delay-2s">
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100">
                        <img src="/images/feature1.jpg" alt="Feature 1" className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title text-primary">Efficient Algorithms</h2>
                            <p className="card-text text-muted">Master the art of problem-solving with optimized solutions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100">
                        <img src="/images/feature2.jpg" alt="Feature 2" className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title text-primary">Clean Code</h2>
                            <p className="card-text text-muted">Write maintainable and readable code that stands the test of time</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100">
                        <img src="/images/feature3.jpg" alt="Feature 3" className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title text-primary">Innovative Projects</h2>
                            <p className="card-text text-muted">Build cutting-edge applications that push boundaries</p>
                        </div>
                    </div>
                </div>
            </section>

           
        </div>
    )
}

export default Homepage