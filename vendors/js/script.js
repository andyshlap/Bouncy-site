
$(document).ready(function() {

	/* Scroll for nav
	=========================================================================================*/


		$('a[href*="#"]')
			  // Remove links that don't actually link to anything
			  .not('[href="#"]')
			  .not('[href="#0"]')
			  .click(function(event) {
		    	// On-page links
		    	if (
		    		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		    		&& 
		    		location.hostname == this.hostname
		    		) {
		      // Figure out element to scroll to
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      // Does a scroll target exist?
		      if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		        	scrollTop: target.offset().top
		        }, 1000, function() {
			          // Callback after animation
			          // Must change focus!
			          var $target = $(target);
			          $target.focus();
			          if ($target.is(":focus")) { // Checking if the target was focused
			          	return false;
			          } else {
			            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			            $target.focus(); // Set focus again
			        };
			    });
		    }
		}
		});


	/* slick-slider(carousel)
	=========================================================================================*/


	
	$('.slick-slider').slick({
		infinite: true,
		dots: true,
		autoplay: true,
		arrows: false,
	});


/* sticky-top
	=========================================================================================*/
	$(window).scroll(function() {
		if($(this).scrollTop() >= 100) {
		  $('.header__nav-bar').addClass('stickytop');
		  $('.header__logo').addClass('logo-hover');
		  $('.nav__item').addClass('nav__item-hover');
		} else {
			$('.header__nav-bar').removeClass('stickytop');
			$('.header__logo').removeClass('logo-hover');
			$('.nav__item').removeClass('nav__item-hover');
		} 
	});
	
});

