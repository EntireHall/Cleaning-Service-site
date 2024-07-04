import Link from 'next/link'
function header() {
  return (
    <div>
      <div className="header-section header-style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="header-widget">
                <ul>
                  <li>
                    <i className="icofont-clock-time"></i>
                    Sun - Thu : 10:00AM - 06:00PM
                  </li>
                  <li>
                    <i className="icofont-location-pin"></i>
                    28/A Street, New York City
                  </li>
                  <li>
                    <i className="icofont-phone"></i>
                    <a href="tel:+880123456789">
                      +88 0123 456 789
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="header-social text-end">
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


      <div className="nav-style-two">
        <div className="navbar-area">

          <div className="mobile-nav">
            <a href="index.html" className="logo">
              <img src="/assets/img/logo.png" className="main-logo" alt="logo" />
              <img src="/assets/img/logo-2.png" className="white-logo" alt="logo" />
            </a>
          </div>

          <div className="container">
            <div className="main-nav">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="index.html">
                    <img src="/assets/img/logo.png" className="main-logo" alt="logo" />
                    <img src="/assets/img/logo-2.png" className="white-logo" alt="logo" />
                  </a>
                  <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link href="/" className="nav-link dropdown-toggle active">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/about" className="nav-link">About Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service" className="nav-link dropdown-toggle">
                          Our Services
                          <i className="icofont-rounded-right"></i>
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="service.html" className="nav-link">Service one</a>
                          </li>
                          <li className="nav-item">
                            <a href="service-two.html" className="nav-link">Services two</a>
                          </li>
                          <li className="nav-item">
                            <a href="service-three.html" className="nav-link">Service three</a>
                          </li>
                          <li className="nav-item">
                            <a href="service-details.html" className="nav-link">Service details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="/gallery" className="nav-link dropdown-toggle">
                          Gallery
                          {/* <i className="icofont-rounded-right"></i> */}
                        </Link>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="pricing.html" className="nav-link">Pricing</a>
                          </li>
                          <li className="nav-item">
                            <a href="testimonial.html" className="nav-link">Testimonial</a>
                          </li>
                          <li className="nav-item">
                            <a href="recent-project.html" className="nav-link">Recent Project</a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link href="/contact" className="nav-link">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-modal">
        <div className="modal fade right" id="sidebar-right" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <a href="index.html">
                  <img src="/assets/img/logo.png" alt="logo" />
                </a>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default header
