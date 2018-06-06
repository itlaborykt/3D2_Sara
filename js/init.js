(function($){
  $(function(){

    //$('.sidenav').sidenav();
    $('.parallax').parallax();

    $('.formatter').each(function() {
    	var width = $(this).outerWidth();
    	var height = width / 1.7777;
    	$(this).css("height", height);
    });

    $('.carousel.carousel-slider').each(function() {
	    $(this).carousel({
	    fullWidth: true,
	    indicators: true,
	  });
    });

    $(".carousel-next").click(function() {
    	var carousel = $(this).parent();

    	carousel.carousel("next");
    });

    $(".carousel-prev").click(function() {
    	var carousel = $(this).parent();

    	carousel.carousel("prev");
    });

	  
    $(".carousel").each(function() {
	var height = 0;
	    
	    $(this).find(".carousel-item").each(function() {
		 if( $(this).outerHeight() > height ) height =  $(this).outerHeight();
	    });
	    
    	$(this).parent().css("height", height);
	    console.log(height);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space



