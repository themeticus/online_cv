$(document).ready(function(){
    jQuery(window).scroll(function() {
    	if ($(this).scrollTop() >= 900) {
    		$('.backToTop').fadeIn('slow');
    } else {
    	$('.backToTop').fadeOut('slow');
    }
    });
    $('.backToTop').click(function() {
    	$('html,Container').animate({
    		scrollTop : 0
    	}, 2000);
    	return false;
    });
    });
