(function ($) {
  "use strict";
  $(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 120) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });
  $(".search-option button").on("click", function () {
    $(".search-input").toggle(200);
  });
  $(".home-slider-area").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      "<i class='icofont-rounded-double-left'></i>",
      "<i class='icofont-rounded-double-right'></i>",
    ],
    items: 1,
    smartSpeed: 2000,
    dots: true,
    autoHeight: true,
  });
  $(".blog-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 2000,
    dots: true,
    items: 1,
    autoplayHoverPause: true,
    stagePadding: 10,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 1000: { items: 3 } },
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: true,
    centerMode: true,
    autoplay: true,
    focusOnSelect: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 450,
        settings: { dots: false, slidesToShow: 3, centerPadding: "0px" },
      },
      {
        breakpoint: 420,
        settings: {
          autoplay: true,
          dots: false,
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(".recent-work-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      500: { items: 2 },
      992: { items: 3 },
      1199: { items: 5 },
    },
  });
  $(".service-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='icofont-rounded-double-left'></i>",
      "<i class='icofont-rounded-double-right'></i>",
    ],
    smartSpeed: 3000,
    dots: false,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
  });
  $(".service-slider-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='icofont-rounded-double-left'></i>",
      "<i class='icofont-rounded-double-right'></i>",
    ],
    items: 1,
    smartSpeed: 2000,
    dots: false,
  });
  $(".popup-gallery").magnificPopup({ type: "image" });
  $(".recent-project-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='icofont-rounded-double-left'></i>",
      "<i class='icofont-rounded-double-right'></i>",
    ],
    smartSpeed: 2000,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      500: { items: 2 },
      768: { items: 3 },
      1024: { items: 4 },
      1200: { items: 5 },
    },
  });
  $(window).on("load", function () {
    $(".top-btn").fadeOut();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $(".top-btn").fadeIn();
    } else {
      $(".top-btn").fadeOut();
    }
  });
  $(".top-btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
  $(window).on("load", function () {
    $(".loader-content").fadeOut(1000);
  });
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }
  $(".newsletter-form").ajaxChimp({
    url: "https://HiBootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    callback: callbackFunction,
  });
})(jQuery);
function setTheme(themeName) {
  localStorage.setItem("viscous_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("viscous_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
(function () {
  if (localStorage.getItem("viscous_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
});
