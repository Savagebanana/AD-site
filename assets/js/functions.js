

// -----------------------------------------------------------------------------
// mobile Nav Toggle
// -----------------------------------------------------------------------------
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


// -----------------------------------------------------------------------------
// Header Image Parallax
// -----------------------------------------------------------------------------


function headerImageScroll() {
	var wScroll = $(window).scrollTop();

	$('section.head-img').css('background-position','right  -' + wScroll +'px');

	// console.log(wScroll);
}

$(window).scroll(function(){
	headerImageScroll();
});