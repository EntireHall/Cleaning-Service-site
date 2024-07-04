import React from 'react'

function footer() {
    return (
        <div>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="/assets/img/logo-2.png" alt="logo" />
                                    </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, tur adipiscing elit, sed do eiusmod tempor contratc.</p>
                                <div className="email">
                                    <form className="newsletter-form" data-bs-toggle="validator">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="EMAIL" required autoComplete="off" />
                                        <button className="default-btn electronics-btn" type="submit">
                                            <i className="icofont-location-arrow"></i>
                                        </button>
                                        <div id="validator-newsletter" className="form-result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget pl-40">
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="service-details.html">Low cost</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="service-details.html">Fastest Service</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="service-details.html">Professional Cleaning</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="service-details.html">Home Cleaning</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="service-details.html">Office Cleaning</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget pl-40">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="team.html">Team</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right"></i>
                                        <a href="testimonial.html">Testimonial</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3>Find Us</h3>
                                <p className="find-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed</p>
                                <ul className="find-us">
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
                                    <li>
                                        <i className="icofont-ui-message"></i>
                                        <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#4920272f26093f203a2a263c3a672a2624">
                                            <span className="__cf_email__" data-cfemail="1b72757d745b6d726878746e6835787476">[email&#160;protected]</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row  align-items-center">
                            <div className="col-lg-6">
                                <div className="footer-social">
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
                            <div className="col-lg-6">
                                <div className="copyright-text text-end">
                                    {/* <p>© Viscous is Proudly Owned by <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p> */}
                              Copy right info
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="top-btn">
                <i className="icofont-scroll-long-up"></i>
            </div>

        </div>
    )
}

export default footer
