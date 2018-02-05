
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

 /* mobile navigation*/

  $('.js--nav-icon').click(function() {
  	var nav = $('.js--header__nav');
  	var icon = $('.js--nav-icon i');

  	nav.slideToggle(200);
  	if(icon.hasClass('ion-navicon-round')) {
  		icon.addClass('ion-close-round');
  		icon.removeClass('ion-navicon-round')
  	} else {
  		icon.addClass('ion-navicon-round');
  		icon.removeClass('ion-close-round')
  	}
  })


	/* details-section  switcher*/

	var icon1 = $('.pe-7s-like');
	var icon2 = $('.pe-7s-mouse');
	var icon3 = $('.pe-7s-light');

	icon1.click(function() {
		
		if(!icon1.hasClass('js--icon-active')) {
	  		icon1.addClass('js--icon-active');

	  		if( icon2.hasClass('js--icon-active')){
	  			icon2.removeClass('js--icon-active');
	  		} else if (icon3.hasClass('js--icon-active')) {
	  			icon3.removeClass('js--icon-active');
	  		}

			$('.js--about-with-love').removeClass('js--details-nodisplay');
			$('.js--about-with-love').addClass('js--details-display');

			if( $('.js--about-clean').hasClass('js--details-display')) {
					$('.js--about-clean').removeClass('js--details-display');
					$('.js--about-clean').addClass('js--details-nodisplay');
			} else if ($('.js--about-creative').hasClass('js--details-display')) {
				$('.js--about-creative').removeClass('js--details-display');
				$('.js--about-creative').addClass('js--details-nodisplay');
			}
  		} 
 	})
 	
 	icon2.click(function() {
		
		if(!icon2.hasClass('js--icon-active')) {
	  		icon2.addClass('js--icon-active');

	  		if( icon3.hasClass('js--icon-active')){
	  			icon3.removeClass('js--icon-active');
	  		} else if (icon1.hasClass('js--icon-active')) {
	  			icon1.removeClass('js--icon-active');
	  		}

			$('.js--about-clean').removeClass('js--details-nodisplay');
			$('.js--about-clean').addClass('js--details-display');

			if( $('.js--about-with-love').hasClass('js--details-display')) {
					$('.js--about-with-love').removeClass('js--details-display');
					$('.js--about-with-love').addClass('js--details-nodisplay');
			} else if ($('.js--about-creative').hasClass('js--details-display')) {
				$('.js--about-creative').removeClass('js--details-display');
				$('.js--about-creative').addClass('js--details-nodisplay');
			}
  		} 
 	})

 	icon3.click(function() {
		
		if(!icon3.hasClass('js--icon-active')) {
	  		icon3.addClass('js--icon-active');

	  		if( icon2.hasClass('js--icon-active')){
	  			icon2.removeClass('js--icon-active');
	  		} else if (icon1.hasClass('js--icon-active')) {
	  			icon1.removeClass('js--icon-active');
	  		}

			$('.js--about-creative').removeClass('js--details-nodisplay');
			$('.js--about-creative').addClass('js--details-display');

			if( $('.js--about-clean').hasClass('js--details-display')) {
					$('.js--about-clean').removeClass('js--details-display');
					$('.js--about-clean').addClass('js--details-nodisplay');
			} else if ($('.js--about-creative').hasClass('js--details-display')) {
				$('.js--about-with-love').removeClass('js--details-display');
				$('.js--about-with-love').addClass('js--details-nodisplay');
			}
  		} 
 	})
});

