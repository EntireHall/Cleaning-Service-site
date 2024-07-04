import React from 'react'

function page() {
  return (
    <div>
      <div class="contact-title contact-title-bg">
<div class="d-table">
<div class="d-table-cell">
<div class="container">
<div class="contact-title-text">
<h2>Contact Us</h2>
<ul>
<li>
<a href="index.html">Home</a>
</li>
<li>
<i class="icofont-rounded-double-right"></i>
Contact Us
</li>
</ul>
</div>
</div>
</div>
</div>
</div>


<div class="contact-section contact-style-two pt-100">
<div class="container">
<div class="contact-area">
<div class="row align-items-center">
<div class="col-md-6">
<div class="contact-img">
<img src="assets/img/contact-img.png" alt="contact image"/>
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class="section-head">
<h2>We Love to <span> Hear from You</span></h2>
<p>Feel free and share it with us. We will get you</p>
</div>
<div class="contact-form">
<form id="contactForm">
<div class="row">
<div class="col-md-12 col-sm-6">
<div class="form-group">
<input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="Your Name"/>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-md-12 col-sm-6">
<div class="form-group">
<input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="Your Email"/>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-lg-12 col-md-12">
<div class="form-group">
<textarea name="message" class="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message"></textarea>
<div class="help-block with-errors"></div>
</div>
</div>
<div class="col-lg-12 col-md-12">
<button type="submit" class="default-btn page-btn">
Send Message
</button>
<div id="msgSubmit" class="h3 text-center hidden"></div>
<div class="clearfix"></div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="contact-info">
<div class="container">
<div class="row contact-card-area">
<div class="col-md-4 col-sm-6">
<div class="contact-card">
<i class="icofont-location-pin"></i>
<h3>Our Location</h3>
<p>28/A Street, New York City</p>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="contact-card">
<i class="icofont-phone"></i>
<h3>Contact Number</h3>
<p>+88 0123 456 789</p>
</div>
</div>
<div class="col-md-4 col-sm-6">
<div class="contact-card">
<i class="icofont-ui-message"></i>
<h3>Message Us</h3>
<p><a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="640c0108080b24120d17070b11174a070b09">[email&#160;protected]</a></p>
</div>
</div>
</div>
</div>
</div>


<div class="map">
<div class="container-fluid p-0">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1587550702255!5m2!1sen!2sbd"></iframe>
</div>
</div>
    </div>
  )
}

export default page
