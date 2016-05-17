// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})



$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".kobe-header-fade").css("opacity", 0 + $(window).scrollTop() / 1000);
    $(".page-wrap-conf").css("opacity", 0 + $(window).scrollTop() / 1000);
    $(".kobe-header-fade").css("opacity", 0 + $(window).scrollTop() / 1000);
    if(scroll < 861){
      $(".lebron-header-fade").css("opacity", 1 - ($(window).scrollTop()) / 1000);
    }
    if(scroll > 861){
      $(".lebron-header-fade").css("opacity", 0 + ($(window).scrollTop()-861) / 1000);
    }
    if(scroll < 1725){
      $(".steph-header-fade").css("opacity", 1 - ($(window).scrollTop()-725) / 1000);
    }
    if(scroll > 1725){
      $(".steph-header-fade").css("opacity", 0 + ($(window).scrollTop()-1725) / 1000);
      $(".kd-header-fade").css("opacity", 1 - ($(window).scrollTop()-1725) / 1000);
    }

});

$(".SearchConf").click(function() {
  $('html,body').animate({
    scrollTop: $(".steph-header-fade").offset().top},
    2000);
});

$(".Home").click(function() {
  $('html,body').animate({
    scrollTop: $(".kobe-header-fade").offset().top},
    2000);
});

$(".SearchTeam").click(function() {
  $('html,body').animate({
    scrollTop: $(".lebron-header-fade").offset().top},
    2000);
});

$(".SearchPlayer").click(function() {
  $('html,body').animate({
    scrollTop: $(".kd-header-fade").offset().top},
    2000);
});

$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });


var scrollPosition = [
  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
  self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);
