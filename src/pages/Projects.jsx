import { Carousel } from "react-bootstrap"
import { dashboardfood, profilefood, restaurantinfo ,chatpic, chatLogin, chatSign    } from "../images"
import { useEffect } from "react";



const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);
  return (
    <>
      <section class="project-section p-3">
        <h1 class="text-center text-dark mb-4">Some of My Projects</h1>
        <div class="row">
          <div className="col-md-6 col-lg-4 mb-4 " style={{height:"10vh"}} >
            <div className="card project-card">
              <Carousel>
                <Carousel.Item>
                  <img src={restaurantinfo} alt="Food Ordering App" className="card-img-top" height={250} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={profilefood} alt="Food Ordering App" className="card-img-top" height={250} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={dashboardfood} alt="Food Ordering App" className="card-img-top" height={250} />
                </Carousel.Item>
              </Carousel>

              <div className="card-body">
                <h5 className="card-title">Food Ordering App</h5>
                <p className="card-text">
                  Discover a seamless and intuitive food ordering experience with our modern web application. This app allows users to browse through menus, customize their orders, and track delivery in real-time. Built with scalability and user-friendliness in mind, it ensures a smooth experience for both users and restaurants.

                </p>



                <div className="d-flex justify-content-between mt-3">
                  <a href="#" className="btn project-btn github">View on GitHub</a>
                  <a href="https://food-order-frontend.onrender.com/" className="btn project-btn live" target="_blank">Try the Live Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 " >
            <div className="card project-card">
              <Carousel>
                <Carousel.Item>
                  <img src={chatpic} alt="Food Ordering App" className="card-img-top" height={250} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={chatLogin} alt="Food Ordering App" className="card-img-top" height={250} />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={chatSign} alt="Food Ordering App" className="card-img-top" height={250} />
                </Carousel.Item>
              </Carousel>

              <div className="card-body">
                <h5 className="card-title">Chat App</h5>
                <p className="card-text">
                  This real-time chat application enables seamless, instant communication between users, providing a dynamic and interactive messaging experience. Built using modern web technologies, the app supports real-time data synchronization, ensuring messages are delivered instantly across multiple devices without the need for page refreshes.

                </p>



                <div className="d-flex justify-content-between mt-3">
                  <a href="#" className="btn project-btn github">View on GitHub</a>
                  <a href="https://food-order-frontend.onrender.com/" className="btn project-btn live" target="_blank">Try the Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </>
  )
}
export default Projects