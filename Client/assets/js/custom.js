// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$(window).scroll(function(){
    $(".header-fade").css("opacity", 0 + $(window).scrollTop() / 500);
  });
