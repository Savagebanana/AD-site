//--------------------------------------
// Header image parallax
//---------------------------------------
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.head-img').css({
		'background-position' : '100% '+ wScroll / 2.75 +'%'
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




