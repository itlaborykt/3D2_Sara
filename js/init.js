(function($){
  $(function(){

    //$('.sidenav').sidenav();
    $('.parallax').parallax();

    $('.formatter').each(function() {
    	var width = $(this).outerWidth();
    	var height = width / 1.7777;
    	$(this).css("height", height);
    });

    $('.carousel.carousel-slider').carousel({
	    fullWidth: true,
	    indicators: true,
	  });

    $(".carousel-next").click(function() {
    	var carousel = $(this).parent();

    	carousel.carousel("next");
    });

    $(".carousel-prev").click(function() {
    	var carousel = $(this).parent();

    	carousel.carousel("prev");
    });

    $(".carousel-item").each(function() {
    	var height = $(this).outerHeight();
    	$(this).parent().css("height", height);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space



