import React from 'react'

function page() {
  return (
    <div>
      <div className="right-modal">
        <div className="modal fade right" id="sidebar-right" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <a href="index.html">
                  <img src="assets/img/logo.png" alt="logo" />
                </a>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 p-0">
                      <div className="modal-about">
                        <h3>About Us</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                      </div>
                      <div className="location">
                        <h3>Find Us</h3>
                        <ul className="find-us">
                          <li>
                            <i className="icofont-location-pin"></i>
                            28/A Street, New York City
                          </li>
                          <li>
                            <i className="icofont-phone"></i>
                            +88 0123 456 789
                          </li>
                          <li>
                            <i className="icofont-at"></i>
                            <a href="">[email&#160;protected]</a>
                          </li>
                        </ul>
                      </div>
                      <div className="header-social">
                        <h3>Connect With Us</h3>
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/" target="_blank"><i className="icofont-linkedin"></i></a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="home-style-three home-bg-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-7 offset-lg-1">
                  <div className="home-text-three">
                    <h1>We Are <span>Top Cleaner</span> in Your Area.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                    <div className="theme-button">
                      <a href="testimonial.html" className="default-btn active-btn">Get A Quote</a>
                      <a href="service.html" className="default-btn">Services</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 p-0">
                  <div className="home-image">
                    <img src="assets/img/home/8.jpg" alt="home image" />
                  </div>
                </div>
              </div>
              <div className="home-three-shapes">
                <img src="assets/img/process-pattern-3.png" alt="shape" />
                <img src="assets/img/process-pattern-4.png" alt="shape" />
                <img src="assets/img/process-pattern-5.png" alt="shape" />
                <img src="assets/img/process-pattern-6.png" alt="shape" />
                <img src="assets/img/process-pattern-7.png" alt="shape" />
                <img src="assets/img/process-pattern-6.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="about-style-two pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="assets/img/about.png" alt="about image" />
                <div className="counter-section">
                  <div className="counter-area">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-6 offset-lg-2 col-xl-5 offset-xl-1">
                        <div className="counter-text">
                          <h2><span className="counter">1</span>K</h2>
                          <p>Job Done</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-6 col-xl-5">
                        <div className="counter-text">
                          <h2><span className="counter">989</span></h2>
                          <p>Happy Clients</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-6 offset-lg-2 col-xl-5 offset-xl-1">
                        <div className="counter-text">
                          <h2><span className="counter">45</span></h2>
                          <p>Experts</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-6 col-xl-5">
                        <div className="counter-text">
                          <h2><span className="counter">12</span></h2>
                          <p>Years of Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-35">
              <div className="section-head">
                <span>About Us</span>
                <h2>We have been doing projects since 2008.</h2>
                <p>It is a long fact that a reader will be distracted by the readable content</p>
              </div>
              <div className="about-text">
                <p>Of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal within the distribution of letters.</p>
                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    100% Secured
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    24/7 Services
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Well Disciplined
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Online Payment
                  </li>
                </ul>
                <div className="theme-button">
                  <a href="pricing.html" className="default-btn active-btn">Booking Now</a>
                  <a href="about.html" className="default-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="service-style-three pt-100 pb-70">
        <div className="container">
          <div className="section-head text-center">
            <span>Services</span>
            <h2>Viscous Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.</p>
          </div>
          <div className="service-slider owl-carousel owl-theme">
            <div className="service-item">
              <i className="flaticon-spray"></i>
              <h3>Professional Cleaning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.</p>
              <div className="theme-button">
                <a href="service-details.html" className="default-btn">Read More</a>
              </div>
              <div className="service-shape">
                <img src="assets/img/service/shapes/service-pattern-6.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-6.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-7.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-8.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-9.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-10.png" alt="shape" />
              </div>
            </div>
            <div className="service-item">
              <i className="flaticon-clean-house"></i>
              <h3>House Cleaning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.</p>
              <div className="theme-button">
                <a href="service-details.html" className="default-btn">Read More</a>
              </div>
              <div className="service-shape">
                <img src="assets/img/service/shapes/service-pattern-6.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-7.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-8.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-9.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-10.png" alt="shape" />
              </div>
            </div>
            <div className="service-item">
              <i className="flaticon-wiper"></i>
              <h3>Office Cleaning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.</p>
              <div className="theme-button">
                <a href="service-details.html" className="default-btn">Read More</a>
              </div>
              <div className="service-shape">
                <img src="assets/img/service/shapes/service-pattern-6.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-7.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-8.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-9.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-10.png" alt="shape" />
              </div>
            </div>
            <div className="service-item">
              <i className="flaticon-spray"></i>
              <h3>Professional Cleaning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.</p>
              <div className="theme-button">
                <a href="service-details.html" className="default-btn">Read More</a>
              </div>
              <div className="service-shape">
                <img src="assets/img/service/shapes/service-pattern-6.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-7.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-8.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-9.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-10.png" alt="shape" />
              </div>
            </div>
            <div className="service-item">
              <i className="flaticon-clean-house"></i>
              <h3>House Cleaning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.</p>
              <div className="theme-button">
                <a href="service-details.html" className="default-btn">Read More</a>
              </div>
              <div className="service-shape">
                <img src="assets/img/service/shapes/service-pattern-6.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-7.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-8.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-9.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-10.png" alt="shape" />
              </div>
            </div>
            <div className="service-item">
              <i className="flaticon-wiper"></i>
              <h3>Office Cleaning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc.</p>
              <div className="theme-button">
                <a href="service-details.html" className="default-btn">Read More</a>
              </div>
              <div className="service-shape">
                <img src="assets/img/service/shapes/service-pattern-6.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-7.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-8.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-9.png" alt="shape" />
                <img src="assets/img/service/shapes/service-pattern-10.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="why-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="why-us-img">
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-us-text ptb-100">
                <div className="section-head">
                  <span>Why Chooes Us</span>
                  <h2>People Trust on Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet, consectetur.</p>
                </div>
                <div className="media">
                  <i className="icofont-check align-self-start me-3"></i>
                  <div className="media-body">
                    <h5 className="mt-0">Experts Cleaners</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.</p>
                  </div>
                </div>
                <div className="media">
                  <i className="icofont-check align-self-start me-3"></i>
                  <div className="media-body">
                    <h5 className="mt-0">Latest Equipment</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.</p>
                  </div>
                </div>
                <div className="media">
                  <i className="icofont-check align-self-start me-3"></i>
                  <div className="media-body">
                    <h5 className="mt-0">Clean & Fast Service</h5>
                    <p>Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.</p>
                  </div>
                </div>
                <div className="media">
                  <i className="icofont-check align-self-start me-3"></i>
                  <div className="media-body">
                    <h5 className="mt-0">Budget Oriented</h5>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="process-section process-style-three pb-70">
        <div className="container">
          <div className="section-head text-center">
            <span>Working Process</span>
            <h2>How Do We Work</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="process-card">
                <i className="icofont-touch"></i>
                <h3>Choose Services</h3>
                <p>Lorem Ipsum is simply dummied text of the printing and typesetting industry.</p>
                <img src="assets/img/process-pattern-2.png" alt="arrow" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="process-card">
                <i className="icofont-world"></i>
                <h3>Booking Online</h3>
                <p>Lorem Ipsum is simply dummied text of the printing and typesetting industry.</p>
                <img src="assets/img/process-pattern-2.png" alt="arrow" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
              <div className="process-card">
                <i className="icofont-recycle-alt"></i>
                <h3>Enjoy Cleaning</h3>
                <p>Lorem Ipsum is simply dummied text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
          <div className="process-shapes">
            <img src="assets/img/process-pattern-3.png" alt="shape" />
            <img src="assets/img/process-pattern-4.png" alt="shape" />
            <img src="assets/img/process-pattern-5.png" alt="shape" />
            <img src="assets/img/process-pattern-6.png" alt="shape" />
            <img src="assets/img/process-pattern-7.png" alt="shape" />
            <img src="assets/img/process-pattern-6.png" alt="shape" />
          </div>
        </div>
      </div>


      <section className="recent-project-section pt-100 pb-70">
        <div className="container-fluid p-0">
          <div className="section-head text-center">
            <span>Our Works</span>
            <h2>Our Recent Works</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.</p>
          </div>
          <div className="recent-project-slider owl-carousel owl-theme">
            <div className="recent-project-item">
              <div className="project-img">
                <img src="assets/img/recent-work/6.png" alt="image" />
                <div className="recent-hover">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <a href="assets/img/recent-work/6.png" className="popup-gallery">
                        <i className="icofont-eye-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-text">
                <h3>
                  <a href="service-three.html">Hotel Cleaning</a>
                </h3>
                <p>Apartment Cleaning</p>
              </div>
            </div>
            <div className="recent-project-item">
              <div className="project-img">
                <img src="assets/img/recent-work/7.png" alt="image" />
                <div className="recent-hover">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <a href="assets/img/recent-work/7.png" className="popup-gallery">
                        <i className="icofont-eye-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-text">
                <h3>
                  <a href="service-three.html">Glass Cleaning</a>
                </h3>
                <p>Apartment Cleaning</p>
              </div>
            </div>
            <div className="recent-project-item">
              <div className="project-img">
                <img src="assets/img/recent-work/9.png" alt="image" />
                <div className="recent-hover">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <a href="assets/img/recent-work/9.png" className="popup-gallery">
                        <i className="icofont-eye-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-text">
                <h3>
                  <a href="service-three.html">House Cleaning</a>
                </h3>
                <p>Apartment Cleaning</p>
              </div>
            </div>
            <div className="recent-project-item">
              <div className="project-img">
                <img src="assets/img/recent-work/10.png" alt="image" />
                <div className="recent-hover">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <a href="assets/img/recent-work/10.png" className="popup-gallery">
                        <i className="icofont-eye-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-text">
                <h3>
                  <a href="service-three.html">Housing Estate</a>
                </h3>
                <p>Apartment Cleaning</p>
              </div>
            </div>
            <div className="recent-project-item">
              <div className="project-img">
                <img src="assets/img/recent-work/8.png" alt="image" />
                <div className="recent-hover">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <a href="assets/img/recent-work/8.png" className="popup-gallery">
                        <i className="icofont-eye-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-text">
                <h3>
                  <a href="service-three.html">Resort Cleaning</a>
                </h3>
                <p>Apartment Cleaning</p>
              </div>
            </div>
            <div className="recent-project-item">
              <div className="project-img">
                <img src="assets/img/recent-work/9.png" alt="image" />
                <div className="recent-hover">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <a href="assets/img/recent-work/9.png" className="popup-gallery">
                        <i className="icofont-eye-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-text">
                <h3>
                  <a href="service-three.html">House Cleaning</a>
                </h3>
                <p>Apartment Cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section team-style-five pb-70">
        <div className="container">
          <div className="section-head text-center">
            <span>Members</span>
            <h2>Our Team Members</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="assets/img/team/1.png" alt="team member" />
                  <div className="team-social">
                    <a href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a>
                    <a href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="icofont-linkedin"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a>
                  </div>
                </div>
                <div className="team-text">
                  <h4>John Smith</h4>
                  <p>Head of Cleaner</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="assets/img/team/2.png" alt="team member" />
                  <div className="team-social">
                    <a href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a>
                    <a href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="icofont-linkedin"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a>
                  </div>
                </div>
                <div className="team-text">
                  <h4>Marry</h4>
                  <p>Cleaner</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="assets/img/team/3.png" alt="team member" />
                  <div className="team-social">
                    <a href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a>
                    <a href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="icofont-linkedin"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a>
                  </div>
                </div>
                <div className="team-text">
                  <h4>John Smith</h4>
                  <p>Office Cleaner</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-img">
                  <img src="assets/img/team/4.png" alt="team member" />
                  <div className="team-social">
                    <a href="https://www.facebook.com/" target="_blank"><i className="icofont-facebook"></i></a>
                    <a href="https://www.twitter.com/" target="_blank"><i className="icofont-twitter"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="icofont-linkedin"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="icofont-instagram"></i></a>
                  </div>
                </div>
                <div className="team-text">
                  <h4>Eve</h4>
                  <p>Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="testimonial-section testimonial-bg ptb-100">
        <div className="testimonial-area p-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-10 offset-md-1 col-sm-10 offset-sm-1">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="testimonial-image-slider slider-nav text-center">
                      <div className="sin-testiImage">
                        <img src="assets/img/testimonial/1.png" alt="Client image" />
                      </div>
                      <div className="sin-testiImage">
                        <img src="assets/img/testimonial/2.png" alt="Client image" />
                      </div>
                      <div className="sin-testiImage">
                        <img src="assets/img/testimonial/1.png" alt="Client image" />
                      </div>
                      <div className="sin-testiImage">
                        <img src="assets/img/testimonial/2.png" alt="Client image" />
                      </div>
                      <div className="sin-testiImage">
                        <img src="assets/img/testimonial/1.png" alt="Client image" />
                      </div>
                      <div className="sin-testiImage">
                        <img src="assets/img/testimonial/2.png" alt="Client image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-text-slider slider-for text-center">
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>Co-worker of 3S</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>Co-worker of 3S</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>Co-worker of 3S</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>Co-worker of 3S</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>Co-worker of 3S</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>Co-worker of 3S</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do is ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices . Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="blog-section pt-100">
        <div className="container">
          <div className="section-head text-center">
            <span>Our Blog</span>
            <h2>Latest News</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et dolore magna aliqua.</p>
          </div>
          <div className="blog-slider owl-carousel owl-theme">
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/1.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">How to cleanroom yourself</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="/assets/img/blog/2.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">Enjoy the working time</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="/assets/img/blog/3.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">Self cleaning is the best drill</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="/assets/img/blog/1.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">How to cleanroom yourself</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/2.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">Enjoy the working time</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="/assets/img/blog/3.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">Self cleaning is the best drill</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/1.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">How to cleanroom yourself</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/2.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">Enjoy the working time</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-area">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/3.png" alt="blog image" />
                </a>
              </div>
              <div className="blog-text">
                <h4><a href="blog-details.html">Self cleaning is the best drill</a></h4>
                <ul>
                  <li>
                    <i className="icofont-calendar"></i>
                    20 Feb 2024
                  </li>
                  <li>
                    <i className="icofont-ui-user"></i>
                    <a href="blog-details.html">John Doe</a>
                  </li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor contratc ut labore et.</p>
                <a href="blog-details.html" className="blog-btn">
                  Read more
                  <i className="icofont-rounded-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-section">
        <div className="container">
          <div className="contact-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="contact-img">
                  <img src="assets/img/contact-img.png" alt="contact image" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="section-head">
                  <h2>We Love to <span> Hear from You</span></h2>
                  <p>Feel free and share with us. We will get you</p>
                </div>
                <div className="contact-form">
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-md-12 col-sm-6">
                        <div className="form-group">
                          <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-6">
                        <div className="form-group">
                          <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea name="message" className="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message"></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn page-btn">
                          Send Message
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
