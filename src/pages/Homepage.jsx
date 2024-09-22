import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import xyz from '../xyz.svg'



import { headphone, instagram, github, linkedin, facebook, passPic } from '../images/index'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className="container-fluid  ">



            <section className="row align-items-center my-3 py-1">
                <div className="col-md-3 text-center p-4">

                    <img src={passPic} className="img-fluid rounded-circle shadow" alt="Deepesh" width="300" />
                </div>

                <div className="col-md-7  text-center">
                    <h1 className=" font-weight-bold text-dark">
                        Hi, I'm <span className="text-primary">Deepesh</span>! <br />
                        A passionate <span className=" lead fs-2 text-success">Developer</span>.
                    </h1>
                </div>


                <div className="col-md-2 mt-0">
                    <div className="d-flex flex-md-column flex-sm-row justify-content-between text-end">
                        <a href="https://www.facebook.com/profile.php?id=100006703937621" className="m-3 sparkle animate__animated animate__bounceInDown animate__delay-2s">
                            <img src={facebook} alt="Facebook" width="40" />
                        </a>
                        <a href="https://www.linkedin.com/in/deepesh-giri/" className="m-3 sparkle animate__animated animate__bounceInUp animate__delay-1s">
                            <img src={linkedin} alt="LinkedIn" width="40" />
                        </a>
                        <a href="https://github.com/Deepeshgiri" className="m-3 sparkle animate__animated animate__bounceInDown">
                            <img src={github} alt="GitHub" width="40" />
                        </a>
                        <a href="https://www.instagram.com/_deepesh_giri/" className="m-3 sparkle animate__animated animate__bounceInUp animate__delay-3s">
                            <img src={instagram} alt="Instagram" width="40" />
                        </a>
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

            <section className="row  mt-5 animate__animated animate__fadeIn animate__delay-2s">
                <div className="col-md-4 mb-4 ">
                    <div className="card shadow h-100">

                        <div className="card-body ">
                            <h2 className="card-title text-primary fs-5">Efficient Algorithms</h2>
                            <p className="card-text text-muted">Master the art of problem-solving with optimized solutions. Learn various algorithmic techniques such as dynamic programming, greedy algorithms, and more.</p>

                            <a href="/algorithms" className="btn btn-outline-primary mt-3">Explore Algorithms</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100">

                        <div className="card-body">
                            <h2 className="card-title text-primary fs-5">Clean Code</h2>
                            <p className="card-text text-muted">Write maintainable and readable code that stands the test of time. Follow best practices and principles like SOLID, DRY, and KISS to enhance code quality.</p>

                            <a href="/clean-code" className="btn btn-outline-primary mt-3">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow h-100">

                        <div className="card-body">
                            <h2 className="card-title text-primary fs-5">Innovative Projects</h2>
                            <p className="card-text text-muted">Build cutting-edge applications that push boundaries in areas such as artificial intelligence, blockchain, and IoT. Expand your portfolio with impactful projects.</p>

                           
                            <Link to="/projects" className="btn btn-outline-primary mt-3">Start a Project</Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Homepage