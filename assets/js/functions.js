
function headerImageScroll() {
	var wScroll = $(window).scrollTop();

	$('section.head-img').css('background-position','right  -' + wScroll +'px');

	// console.log(wScroll);
}

$(window).scroll(function(){
	headerImageScroll();
});

