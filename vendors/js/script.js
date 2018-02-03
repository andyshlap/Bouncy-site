
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


/* sticky-nav
	=========================================================================================*/
	$('.js--about-section').waypoint(function(direction) {
		if (direction == "down") {
			$('.header__nav-bar').addClass('sticky');
      $('.logo').addClass('logo-hover');
      $('.nav__item').addClass('nav__item-hover');
		} else {
			$('.header__nav-bar').removeClass('sticky');
      $('.logo').removeClass('logo-hover');
       $('.nav__item').removeClass('nav__item-hover');
		}
	}, {
		offset: '60px;'
	});

	/* animations of scroll
 	=========================================================================================*/

  $('.js--wp-1').waypoint(function(direction) {
  	$('.js--wp-1').addClass('animated bounceInUp');
  }, {
  	offset: '50%'
  })

  $('.js--wp-2').waypoint(function(direction) {
  	$('.js--wp-2').addClass('animated flipInX');
	}, {
	  offset: '50%'
  })

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated jackInTheBox');
  }, {
    offset: '75%'
  })

   $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated bounceInRight');
  }, {
    offset: '50%'
  })

    $('.js--wp-5').waypoint(function(direction) {
    $('.js--wp-5').addClass('animated pulse');
  }, {
    offset: '50%'
  })




	
	
});

