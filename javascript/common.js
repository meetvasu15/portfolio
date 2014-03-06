 $( document ).ready(function(){
 $('#scene').parallax(); 
 $("html").niceScroll({scrollspeed : "100", autohidemode : false});
 $(".headerLinksContainer span").click(function(e){
		var divId = e.target.id; 
		if($("#"+divId+"Container")){
		$.scrollTo($("#"+divId+"Container"),1000);
		}
  });
  var headLoc = $('.mainContentContainer').offset().top;
  $(window).bind('scroll', function () { 
		if ($(window).scrollTop() > headLoc) { 
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});
 });
// var scene = document.getElementById('scene');
//var parallax = new Parallax(scene);

function onDownArrowClick(){ 
$.scrollTo($(".statementContainer"),1000);
//$("body").localScroll($(".parallaxContainer"));
}

