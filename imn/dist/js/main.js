
$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });


  // mobile_menu
  var menu = $('ul#navigation');
  if(menu.length){
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol:'-'
    });
  };

  /* 7.  Custom Sticky Menu  */
  $(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
	  $(".header-sticky").removeClass("sticky-bar");
	} else {
	  $(".header-sticky").addClass("sticky-bar");
	}
  });

  $.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="ti-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });

  $(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
  });

  
  
  (function($) {

	

  // Scrollax
  $.Scrollax();

  //caraousal
  var carousel = function() {
	$('.home-slider').owlCarousel({
	loop:true,
	autoplay: true,
	margin:0,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	nav:false,
	dots: true,
	autoplayHoverPause: false,
	items: 1,
	// navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	responsive:{
	  0:{
		items:1
	  },
	  600:{
		items:1
	  },
	  1000:{
		items:1
	  }
	}
	});



};



  $(".latest-product__slider").owlCarousel({
	loop: false,
	margin: 0,
	items: 1,
	dots: false,
	nav: true,
	navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
	smartSpeed: 1200,
	autoHeight: false,
	autoplay: false
});
carousel();
 
 



  
	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();
  


})(jQuery);

$(document).ready(function() {
	$('.num-in span').click(function () {
		var $input = $(this).parents('.num-block').find('input.in-num');
	  if($(this).hasClass('minus')) {
		var count = parseFloat($input.val()) - 1;
		count = count < 1 ? 1 : count;
		if (count < 2) {
		  $(this).addClass('dis');
		}
		else {
		  $(this).removeClass('dis');
		}
		$input.val(count);
	  }
	  else {
		var count = parseFloat($input.val()) + 1
		$input.val(count);
		if (count > 1) {
		  $(this).parents('.num-block').find(('.minus')).removeClass('dis');
		}
	  }
	  
	  $input.change();
	  return false;
	});
	
  });