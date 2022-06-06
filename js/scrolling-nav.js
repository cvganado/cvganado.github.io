(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var page = $('html, body');
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
          function(){
            page.stop();
        });
        page.animate({
          scrollTop: (target.offset().top - 54)
        }, 500, function(){
          "easeInOutExpo";
          page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict