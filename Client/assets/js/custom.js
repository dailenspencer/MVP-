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


    $( "#tags" ).autocomplete({
    source: [
      "Cleveland Cavaliers",
      "Toronto Raptors",
      "Miami Heat",
      "Atlanta Hawks",
      "Boston Celtics",
      "Charlotte Hornets",
      "Indiana Pacers",
      "Chicago Bulls",
      "Detroit Pistons",
      "Washington Wizards",
      "Orlando Magic",
      "Milwaukee Bucks",
      "New York Knicks",
      "Brooklyn Nets",
      "Philadelphia 76ers",
      "Golden State Warriors",
      "San Antonio Spurs",
      "Oklahoma City Thunder",
      "Los Angeles Clippers",
      "Portland Trail Blazers",
      "Dallas Mavericks",
      "Memphis Grizzlies",
      "Houston Rockets",
      "Utah Jazz",
      "Sacramento Kings",
      "Denver Nuggets",
      "New Orleans Pelicans",
      "Minnesota Timberwolves",
      "Phoenix Suns",
      "Los Angeles Lakers"
    ],
    select: function( event, ui ) {
      $("#tags").text(ui)
      console.log("eh")
    }
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
