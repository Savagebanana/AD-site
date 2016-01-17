//--------------------------------------
// Header title parallax
//---------------------------------------
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.col-title').css({
		'transform' : 'translate(0, '+ wScroll / 6 +'%)'
	});

});

//--------------------------------------
// Mobile Nav Toggle
//---------------------------------------

function mobileNav() {
	$('.mobile-nav-toggle').on('click', function(){
		var status = $(this).hasClass('is-open');
		if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
		else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
	});
}

$(function() {
	mobileNav();
});




